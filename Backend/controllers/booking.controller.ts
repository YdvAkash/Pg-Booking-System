import { Request, Response } from "express";
import Booking from "../models/booking.model";

export const requestBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error requesting booking", error });
  }
};

export const getUserBookings = async (req: Request, res: Response) => {
  res.send("Get user bookings functionality to be implemented");
};

export const getOwnerBookings = async (req: Request, res: Response) => {
  res.send("Get owner bookings functionality to be implemented");
};
