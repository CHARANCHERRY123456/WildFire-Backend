import User from "../models/userModel.js";

export default class UserRepository {
  constructor () {
    this.model = User;
  }

  create = async (data) => {
    try {
      const user = await this.model.create(data);
      return user;
    } catch (error) {
      throw Error(`Error while creating user: ${error.message}`);
    }
  }

 findOne = async (query) => {
    try {
      const user = await this.model.findOne(query);
      return user;
    } catch (error) {
      throw Error(`Error while finding user: ${error.message}`);
    }
  }
}

