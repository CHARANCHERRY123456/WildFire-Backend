import Habit from '../models/habitModel.js';

export const craeteHabitRepo = async  (habitData) =>{
    return await Habit.create(habitData);
}

export const getAllHabitsRepo = async (userid) =>{
    return await Habit.find({createdBy : userid});
}

export const getHabitByIdRepo = async (habitId) =>{
    return await Habit.findById(habitId);
}

