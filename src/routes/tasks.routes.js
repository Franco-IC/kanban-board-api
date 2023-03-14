import { Router } from "express";
import * as TasksController from "../controllers/tasks.controller.js";

const router = Router();

// Index (all tasks)
router.get("/", TasksController.getAllTasks);

// Get Task by ID
router.get("/:taskId", TasksController.getTaskById);

// New Task
router.post("/new", TasksController.createTask);

// Task Edit by ID
router.put("/edit/:taskId", TasksController.editTaskById);

// Task Delete by ID
router.delete("/delete/:taskId", TasksController.deleteTaskById);

export default router;
