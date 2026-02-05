import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 10,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", UserSchema);
