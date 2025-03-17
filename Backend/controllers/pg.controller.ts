import { Request, Response } from "express";
import PGModel from "../models/pg.model";

export const createPG = async (req: Request, res: Response) => {
  try {
    const pg = await PGModel.create(req.body);
    res.status(201).json(pg);
  } catch (error) {
    res.status(500).json({ message: "Error creating PG", error });
  }
};

export const getPGs = async (req: Request, res: Response) => {
  try {
    const pgs = await PGModel.find();
    res.status(200).json(pgs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching PGs", error });
  }
};
