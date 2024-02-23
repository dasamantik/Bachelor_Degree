import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import express from "@fastify/express";
import dotenv from "dotenv";
import fastify from "fastify";
import mongoose from "mongoose";
//import errorHandler from "./backend/middlewares/error-middleware.js";
import userRoute from "./backend/routes/userR.js";

dotenv.config();

const app = fastify({
  logger: true,
});
await app.register(express);
await mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error", err));
app.register(cookie);
app.register(cors, { credentials: true, origin: process.env.CLIENT_URL });

const PORT = process.env.PORT || 3000;

app.register(userRoute, { prefix: "/api" });

app.listen({ port: PORT }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on port ${address}`);
});
//app.register(errorHandler);
