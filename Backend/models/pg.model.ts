import mongoose, { Schema, Document } from "mongoose";

export interface IPG extends Document {
  pgId: string;
  name: string;
  location: string;
  type: "m" | "f";
  noRooms: number;
}

const PGSchema = new Schema<IPG>({
  pgId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ["m", "f"], required: true },
  noRooms: { type: Number, required: true },
});

export default mongoose.model<IPG>("PG", PGSchema);
