import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  participants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      streak: {
        dates: [String], // Dates of streaks (e.g., '2025-01-25')
        currentStreak: { type: Number, default: 0 },
        longestStreak: { type: Number, default: 0 },
      },
    },
  ],
});

const Task = mongoose.model("Task" , taskSchema);
export default Task;