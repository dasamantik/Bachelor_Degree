import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import errorHandler from "./backend/middlewares/error-middleware.js";
import userRoute from "./backend/routes/userR.js";
dotenv.config();
await mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error", err));

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.listen(PORT, () => {
  console.log(`server running ${PORT} `);
});

app.use("/api", userRoute);
app.use(errorHandler);
