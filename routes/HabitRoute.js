import express from 'express';
import HabitController from '../controllers/HabitController.js';
import { auth } from '../middlewares/auth.js';


const habitRouter = express.Router();
const controller = new HabitController();

habitRouter.post('/create' ,auth, controller.create);
habitRouter.get('/findOne', controller.findOne);
habitRouter.get('/find',controller.find);
habitRouter.get('/:id',controller.findById);
habitRouter.put('/:id',controller.findByIdAndUpdate);
habitRouter.delete('/:id',controller.findByIdAndDelete);




export default habitRouter;