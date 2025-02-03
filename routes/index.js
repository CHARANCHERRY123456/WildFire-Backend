import { Router } from "express";
import userRouter from "./UserRoutes.js";
import habitRouter from "./HabitRoute.js";



const router = Router();
router.use("/user", userRouter);
router.use("/habit" , habitRouter);
export default router;