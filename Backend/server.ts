import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes";
import pgRoutes from "./routes/pg.routes";
import bookingRoutes from "./routes/booking.routes";
import roommateRoutes from "./routes/auth.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pgs", pgRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/roommates", roommateRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
