import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.router.js";
import resumeRouter from "./routes/resume.router.js";
import aiRouter from "./routes/ai.router.js";

const app = express();

const PORT = process.env.PORT || 3001;
// DB connection
await connectDB();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Server is live..."));
app.use("/api/user", userRouter);
app.use("/api/resume", resumeRouter);
app.use("/api/ai", aiRouter);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
