import { craeteHabitRepo } from "../repositories/habitRepository.js";

export const craeteHabitService = async (userId , habitData)=>{
    habitData.createdBy = userId;
    return await craeteHabitRepo(habitData);
};