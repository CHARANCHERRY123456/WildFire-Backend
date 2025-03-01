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

    toggleCompletion = async (req , res) => {
      try {
        const habit = await this.service.toggleCompletion(req.user.id, req.body.habitId, req.body.date);
        res.status(201).json(habit);
      } catch(error) {
        res.status(400).json({error:error.message});
      }
    };
    
    getAllMembers = async (req, res) => {
      try {
        const members = await this.service.getAllMembers(req.body);
        res.status(200).json(members);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };

    getAllHabits = async (req, res) => {
      try {
        const habits = await this.service.getAllHabits(req.params.id);
        res.status(200).json(habits);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };
}