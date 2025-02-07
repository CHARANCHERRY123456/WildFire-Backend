import mongoose from "mongoose";

export const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Untitled",
      trim: true,
    },
    description: {
      type: String,
      required: true,
      default: "No Description provided",
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Habit = mongoose.model("Habit", habitSchema);
export default Habit;
