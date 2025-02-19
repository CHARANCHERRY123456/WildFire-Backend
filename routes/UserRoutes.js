import express from "express";
import UserController from "../controllers/UserController.js";
import UserHabitController from "../controllers/UserHabitController.js";

const userRouter = express.Router();
const userController = new UserController();
const userHabitController = new UserHabitController();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/:id", userController.getUser);
userRouter.get("/:id/habits", userHabitController.getAllHabits);

export default userRouter;