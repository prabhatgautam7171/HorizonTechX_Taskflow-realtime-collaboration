import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  addComment,
  assignTask,
  createTask,
  getTasks,
  updateTaskStatus,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", protect, createTask);

router.put("/:id", protect, updateTaskStatus);

router.post("/:id/comment", protect, addComment);

router.get("/:projectId", protect, getTasks);

router.put("/:id/assign", protect, assignTask);

export default router;
