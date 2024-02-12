import express from "express";
import * as User from "../controllers/userController.js";
import authMiddleware from "../middlewares/auth-middleware.js";
const router = express.Router();

router.post("/register", User.register);
router.post("/login", User.login);
router.post("/logout", User.logout);
router.get("/activate/:link", User.activateAccount);
router.get("/refresh", User.refreshToken);
router.get("/Test", authMiddleware, User.Test);
export default router;
