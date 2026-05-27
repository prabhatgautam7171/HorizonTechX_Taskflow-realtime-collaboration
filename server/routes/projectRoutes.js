import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createProject,
  getProjects,
} from "../controllers/projectController.js";

const router = express.Router();

router.route("/")
  .post(protect, createProject)
  .get(protect, getProjects);

export default router;
