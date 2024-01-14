import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./backend/routes/userR.js";

await mongoose
  .connect("mongodb+srv://dasamant:12345@cluster0.k36mt3v.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error", err));

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

app.use("/auth", userRoute);
