import { Router } from "express";
import userRouter from "./UserRoutes.js";

const router = Router();
router.use("/user", userRouter);

export default router;