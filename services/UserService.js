import UserRepository from "../repositories/UserRepository.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import transporter from "../config/emailTransporter.js";

export default class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  register = async (data) => {
    try {
      const userExists = await this.repository.findOne({ email: data.email });
      if (userExists) {
        throw Error("User already exists");
      }
      const user = await this.repository.create(data);
      return user;
    } catch (error) {
      throw Error(`Error while registering user: ${error.message}`);
    }
  };

  login = async (data) => {
    try {
      const { username, email, password } = data;
      const user = await this.repository.findOne({
        $or: [{ username }, { email }],
      });
      if (!user) {
        throw Error("User not found. Please register.");
      }

      const isPasswordMatched = await user.matchPassword(password);
      if (!isPasswordMatched) {
        throw Error("Invalid password");
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          name: user.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1y" }
      );
      return token;
    } catch (error) {
      throw Error(`Error while logging in: ${error.message}`);
    }
  };

  getUser = async (id) => {
    try {
      const user = await this.repository.findById(id);
      if (!user) {
        throw Error("User not found");
      }
      return user;
    } catch (error) {
      throw Error(`Error while fetching user: ${error.message}`);
    }
  };

  addHabitToUser = async(userId ,habitSchema)=>{
    try {
      console.log(userId);
      console.log(habitSchema);
      const user = await this.repository.addHabitToUser(userId , habitSchema);
      if(!user){
        throw Error("Error while adding habit to user");
      }
      return user;
    } catch(error){
      throw Error("Error while adding habit to user",error.message);
    }
  }

  editUser = async (id, data, file) => {
    try {
      const userExists = await this.repository.findById(id);
      if (!userExists) {
        throw Error("User not found");
      }
      if (file) {
        data.profilePic = file.path;
      }
      const user = await this.repository.findByIdAndUpdate(id, data);
      return user;
    } catch (error) {
      throw Error(`Error while updating user: ${error.message}`);
    }
  };

  forgotPassword = async (email) => {
    const user = await this.repository.findOne({ email });
    if (!user) throw { status: 404, message: 'User not found' };

    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = Date.now() + 3600000;

    await this.repository.findByIdAndUpdate(user._id, 
      { resetPasswordToken: token, resetPasswordExpires: tokenExpiry }
    );

    const resetLink = `https://wildfire-client.vercel.app/reset-password/${token}`;

    await transporter.sendMail({
      to: email,
      from: 'no-reply@wildfire.com',
      subject: 'Password Reset',
      html: `<p>You requested a password reset</p>
            <p>Click <a href="${resetLink}">here</a> to reset your password</p>`
    });

    return { message: 'Password reset link sent' };
  };

  resetPassword = async (token, newPassword) => {
    const user = await this.repository.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });
    if (!user) throw { status: 400, message: 'Invalid or expired token' };

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    return { message: 'Password has been reset successfully' };
  };
}
