import HabitService from "../services/HabitService.js";

export default class HabitController{
    constructor(){
        this.service = new HabitService();
    }

    create = async(req , res)=>{
        try{
            const habitData = {...req.body, createdBy: req.user.id};
            const habit = await this.service.create(habitData);
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
            const habit = await this.service.findById(req.params.id);
            res.status(200).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }

    findByIdAndUpdate = async(req , res)=>{
        try{
            const habit = await this.service.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }

    findByIdAndDelete = async(req , res)=>{
        try{
            const habit = await this.service.findByIdAndDelete(req.params.id);
            res.status(200).json(habit);
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }
}