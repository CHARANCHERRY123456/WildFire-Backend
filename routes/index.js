import { Router } from "express";
import userRouter from "./UserRoutes.js";
import habitRouter from "./HabitRoute.js";
import userHabitRoute from "./UserHabitRoute.js";



const router = Router();
router.use("/user", userRouter);
router.use("/habit" , habitRouter);
router.use("/user-habit" , userHabitRoute);
export default router;