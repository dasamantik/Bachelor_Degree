import express from "express";
import * as User from "../controllers/userController.js";

const router = express.Router();

router.post("/register", User.register);
router.post("/login", User.login);
router.post("/logout");
router.get("/activate/:link");
router.get("/refresh");
export default router;
