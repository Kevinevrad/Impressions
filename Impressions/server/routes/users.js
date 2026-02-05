import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// * CREATE A USER : USING POST REQUEST
router.post("/", (req, res) => {
  res.json({
    message: "CREATING A NEW USER",
  });
});

// * DELETE A USER BASE ON ID : USING DELETE REQUEST
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE A SPECIFIC USER" });
});

export default router;
