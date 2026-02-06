import express from "express";
import User from "../models/userModel.js";
import mongoose from "mongoose";

// * CREATING USER -------------------------------------------------
export const creatingUser = async (req, res) => {
  const { email, service, password } = req.body;
  try {
    const currUser = await User.create({ email, service, password });
    res.status(200).json({ currUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// *DELETING USER
export const deletingUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not found!" });
  }
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(400).json({ error: "This user do not exist" });
  }
  res.status(200).json(deletedUser);
};

// * GET USER

export const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not found!" });
  }
  const currUser = await User.findById(id);
  if (!currUserUser) {
    return res.status(400).json({ error: "This user do not exist" });
  }
  res.status(200).json(currUser);
};
