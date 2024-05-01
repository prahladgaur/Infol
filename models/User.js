import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    tag: { type: String, required: false, unique: false },
    password: { type: String, required: true },
    profilePicture: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };
