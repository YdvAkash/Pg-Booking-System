import express from "express";
import { requestBooking, getUserBookings, getOwnerBookings } from "../controllers/booking.controller";

const router = express.Router();

router.post("/request", requestBooking);
router.get("/my-bookings", getUserBookings);
router.get("/requests", getOwnerBookings);

export default router;
