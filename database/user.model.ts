import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  password: string;
  email: string;
  picture: string;
  joinedAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  picture: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
