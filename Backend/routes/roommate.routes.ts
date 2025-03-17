import express from "express";
import { findRoommates } from "../controllers/roommate.controller";

const router = express.Router();

router.get("/find", findRoommates);

export default router;
