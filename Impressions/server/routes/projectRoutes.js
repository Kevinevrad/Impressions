import express from "express";
import {
  creatingProject,
  deletingProject,
  getProject,
  getProjects,
  updatingProject,
} from "../controllers/projectController.js";

// CREATING THE ROUTER
const router = express.Router();

// TODO:POST (ADD TO BD) A NEW PROJECT
router.post("/", creatingProject);

// * GET (TAKE FROM DB) ALL PROJECTS
router.get("/", getProjects);

// * GET (TAKE FROM DB)  A SPECIFIC PROJECT
router.get("/:id", getProject);

// DELETE PROJECT
router.delete("/:id", deletingProject);

// UPDATE PROJECT
router.patch("/:id", updatingProject);

export default router;
