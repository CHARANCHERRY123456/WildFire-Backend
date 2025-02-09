import express from "express";
import UserHabitController from "../controllers/UserHabitController.js";

const userHabitRoute = express();
const controller = new UserHabitController();

userHabitRoute.post('/link' , controller.addUserToHabit);


export default userHabitRoute;