import express from "express";
import {
  getUser,
  getUserResume,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import protect from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user-data", protect, getUser);
userRouter.get("/resume", protect, getUserResume);

export default userRouter;
