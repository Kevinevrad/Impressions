import mongoose from "mongoose";
import express from "express";
import {
  addRapport,
  removeRapport,
} from "../controllers/rapportControllers.js";

const router = express.Router();

//  *POST REQUEST
router.post("/", addRapport);

// *DELETE REQUEST
router.delete("/:id", removeRapport);

export default router;
