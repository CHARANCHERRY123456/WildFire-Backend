import mongoose from "mongoose";

const UserHabitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  habit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habit",
    required: true,
  },
  dates: {
    type: Map,
    of: Number,
    default: {}
  }
});

// Indexing user and habit together to make sure that a user can have only one instance of a habit
UserHabitSchema.index({ user: 1, habit: 1 }, { unique: true });

const UserHabit = mongoose.model("UserHabit", UserHabitSchema);
export default UserHabit;
