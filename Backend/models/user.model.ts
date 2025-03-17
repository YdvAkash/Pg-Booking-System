import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  name: string;
  password: string;
  gender: "Male" | "Female";
  contactNo: string;
  roommate: boolean;
  roomId: string;
  pgId: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true},
  name: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  contactNo: { type: String, required: true },
  roommate: { type: Boolean, required: false },
  roomId: { type: String, required: false, ref: "Room" },
  pgId: { type: String, required: false, ref: "PG" },
});

export default mongoose.model<IUser>("User", UserSchema);
