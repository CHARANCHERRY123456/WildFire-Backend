import UserRepository from "../repositories/UserRepository.js";
import jwt from "jsonwebtoken";

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
        { expiresIn: "1h" }
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
}
