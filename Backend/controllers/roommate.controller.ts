import { Request, Response } from "express";
import User from "../models/user.model";

export const findRoommates = async (req: Request, res: Response) => {
  try {
    const roommates = await User.find({ lookingForRoommate: true });
    res.status(200).json(roommates);
  } catch (error) {
    res.status(500).json({ message: "Error finding roommates", error });
  }
};
