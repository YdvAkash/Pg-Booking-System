import express from "express";
import { register, login, getProfile } from "../controllers/auth.controller";

const router = express.Router();

// Corrected route definitions
router.post("/register", register);
router.post("/login", login);
router.get("/profile", getProfile);

export default router;
