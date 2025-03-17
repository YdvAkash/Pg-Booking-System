import mongoose, { Schema, Document } from "mongoose";

export interface IRoom extends Document {
  roomId: string;
  pgId: string;
  roomNo: number;
  capacity: number;
  occupants: number;
}

const RoomSchema = new Schema<IRoom>({
  roomId: { type: String, required: true, unique: true },
  pgId: { type: String, required: true, ref: "PG" },
  roomNo: { type: Number, required: true },
  capacity: { type: Number, required: true },
  occupants: { type: Number, required: true },
});

export default mongoose.model<IRoom>("Room", RoomSchema);
