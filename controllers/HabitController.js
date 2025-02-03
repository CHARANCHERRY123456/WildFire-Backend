import { craeteHabitService } from "../services/habitService.js";

export const createHabit =async (req , res)=>{
    try{
        req.user.id = "Charan";
        const habit = await craeteHabitService(req.user.id , req.body);
        res.status(201).json(habit);
    }catch(error){
        console.log("error is here");
        res.status(500).json( {message   : error.message});
    }
}