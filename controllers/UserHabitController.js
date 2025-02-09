import UserHabitService from "../services/UserHabitService.js";

export default class UserHabitController{
    constructor(){
        this.service = new UserHabitService();
    }

    addUserToHabit = async(req , res)=>{
        try{
            const {userId ,habitId } = req.body;
            const UserHabit = await this.service.addUserToHabit(userId ,habitId);
            return res.status(201).json(UserHabit);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }
}