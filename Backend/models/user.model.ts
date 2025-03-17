import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  userId: string;
  name: string;
  gender: "Male" | "Female";
  contactNo: string;
  roommate: boolean;
  roomId: string;
  pgId: string;
}

const UserSchema = new Schema<IUser>({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  contactNo: { type: String, required: true },
  roommate: { type: Boolean, required: true },
  roomId: { type: String, required: true, ref: "Room" },
  pgId: { type: String, required: true, ref: "PG" },
});

export default mongoose.model<IUser>("User", UserSchema);
