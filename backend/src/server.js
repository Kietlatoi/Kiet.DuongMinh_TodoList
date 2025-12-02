import express from "express";
import tasksRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

const app = express();

//middleWares

app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: ["http://localhost:5174", "http://localhost:5173"] }));
}

connectDB();

app.use("/api/tasks", tasksRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu chạy trên cổng ${PORT}`);
  });
});
