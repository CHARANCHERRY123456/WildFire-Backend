import HabitRepository from "../repositories/HabitRepository";

export default class HabitService{
    constructor(){
        this.repository = new HabitRepository();
    }
    
    

}