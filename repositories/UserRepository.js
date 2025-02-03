import CrudRepository from "./CrudRepository.js";
import User from "../models/UserModel.js";

export default class UserRepository extends CrudRepository {
  constructor () {
    super(User);
  }
}
