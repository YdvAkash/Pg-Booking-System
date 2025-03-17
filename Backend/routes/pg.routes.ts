import express from "express";
import { createPG, getPGs } from "../controllers/pg.controller";

const router = express.Router();

router.post("/", createPG);
router.get("/", getPGs);

export default router;
