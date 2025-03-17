import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import connectDB from "./config/db";
import pgRoutes from "./routes/pg.routes";

// dotenv.config();
const app = express();

// Middleware
app.use(express.json());
// app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running!");
});
// Routes
app.use("/api/pgs", pgRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
