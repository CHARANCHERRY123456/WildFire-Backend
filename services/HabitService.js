import HabitRepository from "../repositories/HabitRepository.js";
import UserHabitRepository from "../repositories/UserHabitRepository.js";
import mongoose from "mongoose";

export default class HabitService {
  constructor() {
    this.repository = new HabitRepository();
    this.junctionRepository = new UserHabitRepository();
  }

  create = async (data) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const Habit = await this.repository.create(data);  // create habit
      await this.junctionRepository.addUserTohabit(data.createdBy, Habit._id);  // add user to habit
      await session.commitTransaction();
      session.endSession();
      return Habit;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw Error(`Error while creating Habit :${error.message} `);
    }
  };
  findOne = async (data) => {
    try {
      const Habit = await this.repository.findOne(data);
      return Habit;
    } catch (error) {
      throw Error(`Error while finding habit: ${error.message}`);
    }
  };

  find = async (data) => {
    try {
      const Habit = await this.repository.find(data);
      return Habit;
    } catch (error) {
      throw Error(`Error while finding habit: ${error.message}`);
    }
  };
  findById = async (id) => {
    try {
      const Habit = await this.repository.findById(id, ["createdBy", "name"]);
      if (!Habit) throw Error("No habit found");
      return Habit;
    } catch (error) {
      throw Error(`Error while finding habit: ${error.message}`);
    }
  };

  //   Update routes
  findByIdAndUpdate = async (id, data) => {
    try {
      const Habit = await this.repository.findByIdAndUpdate(id, data);
      return Habit;
    } catch (error) {
      throw Error(`Error while finding and updating habit: ${error.message}`);
    }
  };

  findByIdAndDelete = async (id) => {
    try {
      const Habit = await this.repository.findByIdAndDelete(id);
      if (!Habit) throw Error("No habit found");
      return Habit;
    } catch (error) {
      throw Error(`Error while deliting habit: ${error.message}`);
    }
  };
}
