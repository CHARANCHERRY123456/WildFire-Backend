import express from "express";
import UserController from "../controllers/UserController.js";

const userRouter = express.Router();
const controller = new UserController();

userRouter.post("/register", controller.register);
userRouter.post("/login", controller.login);
userRouter.get("/:id", controller.getUser);

export default userRouter;