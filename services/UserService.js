import UserRepository from "../repositories/UserRepository.js";
import jwt from "jsonwebtoken";

export default class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  register = async (data) => {
    try {
      const user = await this.repository.create(data);
      return user;
    } catch (error) {
      throw Error(`Error while registering user: ${error.message}`);
    }
  }

  login = async (data) => {
    try {
      const user = await this.repository.findOne({ email: data.email });
      if (!user) {
        throw Error("User not found");
      }
      const token = jwt.sign(
        { 
          id: user._id,
          email: user.email,
          name: user.name
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      )
      return token;
    } catch (error) {
      throw Error(`Error while logging in: ${error.message}`);
    }
  }
}
