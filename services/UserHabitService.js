import UserHabitRepository from "../repositories/UserHabitRepository.js";
import HabitRepository from "../repositories/HabitRepository.js";
import UserRepository from "../repositories/UserRepository.js";
export default class UserHabitService{
    constructor(){
        this.repository = new UserHabitRepository();
        this.habitRepository = new HabitRepository();
        this.userRepository = new UserRepository();
    }

    addUserToHabit = async(userId , habitId)=>{
        try{
            const habit = await this.habitRepository.findById(habitId);
            if(!habit) throw new Error("Habit Not Found");

            const user = await this.userRepository.findById(userId);
            if(!user) throw new Error("User not found");

            return await this.repository.addUserTohabit(userId,habitId);

        }catch(error){
            throw Error(`Error while adding user to habit : ${error.message} `);
        }
    }

    toggleCompletion = async (data) => {
        try {
          const date = data.date;
          const dateObj = new Date(date);
          if (isNaN(dateObj.getTime())) {
            throw Error("Invalid date format");
          }
          if (dateObj > new Date()) {
            throw Error("Cannot toggle completion for future dates");
          }
          const formattedDate = dateObj.toISOString().split("T")[0];
          if (!formattedDate) {
            throw Error("Invalid date format");
          }
          data.date = formattedDate;
          const res = await this.repository.toggleCompletion(data);
          return res;
        } catch (error) {
          throw Error(`Error while toggling completion: ${error.message}`);
        }
      };

      getAllMembers = async (data) => {
        try {
          const members = await this.repository.getAllMembers(data.habitId);
          return members;
        } catch (error) {
          throw Error(error.message);
        }
      }

      getAllHabits = async (data) => {
        try {
          const habits = await this.repository.getAllHabits(data.userId);
          return habits;
        } catch (error) {
          throw Error(error.message);
        }
      }
}