import express from "express";
import UserHabitController from "../controllers/UserHabitController.js";
import { auth } from "../middlewares/auth.js";

const userHabitRoute = express();
const controller = new UserHabitController();

userHabitRoute.post('/link' , controller.addUserToHabit);
userHabitRoute.post('/toggle-complete', auth, controller.toggleCompletion);
userHabitRoute.get('/:id/members', controller.getAllMembers);
userHabitRoute.delete('/unlink', controller.removeUserFromHabit);

export default userHabitRoute;