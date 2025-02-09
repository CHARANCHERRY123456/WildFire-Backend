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
            const habit = this.habitRepository.findById(habitId);
            if(!habit) throw new Error("Habit Not Found");

            const user = this.userRepository.findById(userId);
            if(!user) throw new Error("User not found");

            return await this.repository.addUserTohabit(userId,habitId);

        }catch(error){
            throw Error(`Error while adding user to habit : ${error.message} `);
        }
    }
}