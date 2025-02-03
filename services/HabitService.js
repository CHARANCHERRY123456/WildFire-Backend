import HabitRepository from "../repositories/HabitRepository.js";

export default class HabitService {
  constructor() {
    this.repository = new HabitRepository();
  }

  create = async (data) => {
    try {
      const Habit = await this.repository.create(data);
      return Habit;
    } catch (error) {
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
  findById = async (data) => {
    try {
      const Habit = await this.repository.findById(data);
      return Habit;
    } catch (error) {
      throw Error(`Error while finding habit: ${error.message}`);
    }
  };

  //   Update routes
  findByIdAndUpdate = async (data) => {
    try {
      const Habit = await this.repository.findByIdAndUpdate(data.id, data);
      return Habit;
    } catch (error) {
      throw Error(`Error while finding and updating habit: ${error.message}`);
    }
  };

  findByIdAndDelete = async (data) => {
    try {
      const Habit = await this.repository.findByIdAndDelete(data.id);
      return Habit;
    } catch (error) {
      throw Error(`Error while deliting habit: ${error.message}`);
    }
  };
}
