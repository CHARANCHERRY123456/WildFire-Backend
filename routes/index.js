import { Router } from "express";
import userRouter from "./UserRoutes.js";
import habitRouter from "./HabitRoute.js";
import userHabitRoute from "./UserHabitRoute.js";



const router = Router();
router.use("/user", userRouter);
router.use("/habit" , habitRouter);
router.use("/user-habit" , userHabitRoute);

router.get("", (req, res) => {
  res.send("Welcome!").status(200);
});

export default router;