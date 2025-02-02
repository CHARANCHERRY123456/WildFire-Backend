import { createHabit } from "../controllers/habitController.js";
import express from 'express';


const habitRouter = express.Router();

habitRouter.post('/craeteHabit' , createHabit);


export default habitRouter;