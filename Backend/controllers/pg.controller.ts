import { Request, Response } from "express";
import PG from "../models/pg.model";

export const createPG = async (req: Request, res: Response) => {
  try {
    const pg = await PG.create(req.body);
    res.status(201).json(pg);
  } catch (error) {
    res.status(500).json({ message: "Error creating PG", error });
  }
};

export const getAllPGs = async (req: Request, res: Response) => {
  try {
    const pgs = await PG.find();
    res.status(200).json(pgs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching PGs", error });
  }
};

export const getPGById = async (req: Request, res: Response) => {
  try {
    const pg = await PG.findById(req.params.pgId);
    if (!pg) return res.status(404).json({ message: "PG not found" });
    res.status(200).json(pg);
  } catch (error) {
    res.status(500).json({ message: "Error fetching PG", error });
  }
};
