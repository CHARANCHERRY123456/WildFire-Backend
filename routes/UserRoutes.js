import express from "express";
import UserController from "../controllers/UserController.js";
import UserHabitController from "../controllers/UserHabitController.js";
import upload from "../config/multerConfig.js"

const userRouter = express.Router();
const userController = new UserController();
const userHabitController = new UserHabitController();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get('/verify-token/', userController.verifyToken);
userRouter.get("/:id", userController.getUser);
userRouter.get("/:id/habits", userHabitController.getAllHabits);
userRouter.put("/:id", upload.single("image"), userController.editUser);
userRouter.post('/forgot-password', userController.forgotPassword);
userRouter.post('/reset-password/:token', userController.resetPassword);

export default userRouter;