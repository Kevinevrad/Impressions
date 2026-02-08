import express from "express";
import {
  creatingUser,
  deletingUser,
  getUser,
  getAllUsers,
} from "../controllers/usersController.js";

const router = express.Router();

// * CREATE A USER : USING POST REQUEST
router.post("/", creatingUser);

// * DELETE A USER BASE ON ID : USING DELETE REQUEST
router.delete("/:id", deletingUser);

// * GET USER
router.get("/:id", getUser);

// * GET ALL USERS
router.get("/", getAllUsers);

export default router;
