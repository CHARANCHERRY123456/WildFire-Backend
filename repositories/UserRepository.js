import CrudRepository from "./CrudRepository.js";
import User from "../models/UserModel.js";

export default class UserRepository extends CrudRepository {
  constructor () {
    super(User);
  }

  addHabitToUser = async(userId ,habitSchema)=>{
      try{
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          {$push : {habits:habitSchema}},
          {new:true}
        )
        return updatedUser;
      } catch (error) {
        throw Error(`Error while adding habit to user: ${error.message}`);
      }
  }
}
