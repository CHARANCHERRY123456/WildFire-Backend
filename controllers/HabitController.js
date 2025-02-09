import HabitService from "../services/HabitService.js";

export default class HabitController{
    constructor(){
        this.service = new HabitService();
    }

    create = async(req , res)=>{
        try{
            const habit = await this.service.create(req.body);
            res.status(201).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }
    findOne = async(req , res)=>{
        try{
            const habit = await this.service.findOne(req.body);
            res.status(201).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }
    find = async(req , res)=>{
        try{
            const habit = await this.service.find(req.body);
            res.status(201).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }
    findById = async(req , res)=>{
        try{
            const habit = await this.service.findById(req.body);
            res.status(201).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }

    findByIdAndUpdate = async(req , res)=>{
        try{
            const habit = await this.service.findByIdAndUpdate(req.body);
            res.status(201).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }

    findByIdAndDelete = async(req , res)=>{
        try{
            const habit = await this.service.findByIdAndDelete(req.body);
            res.status(201).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }
}