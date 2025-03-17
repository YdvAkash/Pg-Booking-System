import express from "express";
import { createPG, getAllPGs, getPGById } from "../controllers/pg.controller";

const router = express.Router();

router.post("/create", createPG);
router.get("/all", getAllPGs);
// router.get("/:pgId", getPGById);

export default router;
