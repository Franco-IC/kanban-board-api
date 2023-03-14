import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find();

    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      throw new Error("No tasks yet");
    }
  } catch (e) {
    res.status(404).json({ error: `${e.message}` });
  }
};

export const getTaskById = async (req, res) => {
  try {
    let task = await Task.findById(req.params.taskId);
    res.status(200).json(task);
  } catch (e) {
    console.error(e.message);
    res.status(404).json({ error: "Task not found" });
  }
};

export const createTask = async (req, res) => {
  let task = new Task();

  const { title, status, description } = req.body;
  task.title = title;
  task.status = status;
  task.description = description;

  try {
    task = await task.save();
    res.json(task);
  } catch (e) {
    console.error(e.message);
  }
};

export const editTaskById = async (req, res) => {
  try {
    let task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
      new: true,
    });
    res.status(200).json(task);
  } catch (e) {
    console.error(e.message);
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.taskId });
    res.json(await Task.find());
  } catch (e) {
    console.error(e.message);
  }
};
