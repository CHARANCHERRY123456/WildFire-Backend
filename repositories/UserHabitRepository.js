import CrudRepository from "./CrudRepository.js";
import UserHabit from "../models/UserHabitModel.js";

export default class UserHabitRepository extends CrudRepository {
  constructor() {
    super(UserHabit);
  }

  toggleCompletion = async (data) => {
    try {
      const { userId, habitId, date } = data;
      const userHabit = await this.model.findOne({ user: userId, habit: habitId });
      if (!userHabit) {
        throw Error("UserHabit not found");
      }
      userHabit.dates.set(date, userHabit.dates.get(date) ? 0 : 1);
      await userHabit.save();
      return { message: "Success" };
    } catch (error) {
      throw Error(`Error while toggling completion: ${error.message}`);
    }
  };

  addUserTohabit = async(userId , habitId)=>{
    try {
      return await UserHabit.create({
        user: userId,
        habit: habitId
      });
    } catch (error) {
      throw Error(`Error while adding user to habit : ${error.message}`);
    }
  }
}
