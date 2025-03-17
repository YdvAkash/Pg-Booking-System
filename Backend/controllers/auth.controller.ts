import { Request, Response } from "express";
import User from "../models/user.model";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, name, contactNo, gender, password } = req.body;

    if (!username || !name || !contactNo || !gender || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(409).json({ message: "Username already taken" });
      return;
    }

    const user = await User.create({
      username,
      name,
      contactNo,
      gender,
      password, // Password is stored as plain text (⚠ Not recommended for production)
    });

    res.status(201).json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: "Username and password are required" });
      return;
    }

    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (user.password !== password) {
      res.status(401).json({ message: "Incorrect password" });
      return;
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const username = req.params.username || req.query.username; // Supports both methods

    if (!username) {
      res.status(400).json({ message: "Username is required" });
      return;
    }

    const user = await User.findOne({ username }).select("-password"); // Exclude password

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ message: "User found successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};
