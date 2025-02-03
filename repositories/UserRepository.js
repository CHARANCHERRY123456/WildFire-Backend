import User from "../models/userModel.js";
import CrudRepository from "./CrudRepository.js";

export default class UserRepository extends CrudRepository {
  constructor () {
    super(User);
  }
}
