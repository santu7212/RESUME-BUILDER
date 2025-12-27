import express from "express";
import protect from "../middlewares/auth.middleware.js";
import {
  createResume,
  deleteResume,
  getPublicResumeById,
  getResumeById,
  updateResume,
} from "../controllers/resume.controller.js";
import upload from "../config/multer.js";

const resumeRouter = express.Router();
resumeRouter.post("/create-resume", protect, createResume);
resumeRouter.put(
  "/update-resume",
  upload.single("image"),
  protect,
  updateResume
);
resumeRouter.delete("/delete-resume/:", protect, deleteResume);
resumeRouter.get("/get-resume/:resumeID", protect, getResumeById);
resumeRouter.get("/public/:resumeID", getPublicResumeById);

export default resumeRouter;
