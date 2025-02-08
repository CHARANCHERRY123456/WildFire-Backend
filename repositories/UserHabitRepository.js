import CrudRepository from "./CrudRepository";
import UserHabit from "../models/UserHabitModel";

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
}
