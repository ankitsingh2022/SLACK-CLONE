import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,   // ✅ Capital S
      required: true,
      unique: true,
    },
    name: {
      type: String,   // ✅ Capital S
      required: true,
    },
    image: {
      type: String,   // ✅ Capital S
      required: true,
    },
    clerkID: {
      type: String,   // ✅ Capital S
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
