import { Task } from "../models/task.model.js";
export const getTask = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json({
      tasks,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addtask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title) {
      return res.status(400).json({
        error: "title is required",
      });
    }
    const task = await Task.create({ title, description, status });
    return res.status(501).json({
      task,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!task) {
      return res.status(404).json({
        error: "task not found",
      });
    }
    res.json(task);
  } catch (error) {
    next(err);
  }
};

export const removeTask = async (req, res) => {
  try {
    const { id } = req.params; // extract :id from URL
    const task = await Task.findByIdAndDelete(id); // pass id here

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};
