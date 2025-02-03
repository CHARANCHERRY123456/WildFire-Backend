import CrudRepository from "./CrudRepository.js";

import Habit from "../models/HabitModel.js";

export default class HabitRepository extends CrudRepository{
    constructor(){
        super(Habit);
    }
}