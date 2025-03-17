import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  userId: string;    // User who is booking
  pgId: string;      // PG being booked
  roomId: string;    // Room being booked
  status: "pending" | "approved" | "rejected"; // Booking status
  createdAt: Date;
}

const BookingSchema: Schema = new Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    pgId: { type: mongoose.Schema.Types.ObjectId, ref: "PG", required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  },
  { timestamps: true }
);

const Booking = mongoose.model<IBooking>("Booking", BookingSchema);
export default Booking;
