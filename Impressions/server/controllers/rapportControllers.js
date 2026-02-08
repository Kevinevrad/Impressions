import mongoose from "mongoose";
import Rapport from "../models/rapportModel.js";
import Project from "../models/projectModel.js";

// !HANDLE RAPPORT CREATION
export const addRapport = async (req, res) => {
  const { name, description, docFormat, nPages, nExemplaires } = req.body;
  try {
    const currRapport = await Rapport.create({
      name,
      description,
      docFormat,
      nPages,
      nExemplaires,
      project: Project._id,
    });
    res.status(200).json(currRapport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// !HANDLE DELETING OF EXIXTING RAPPORT
export const removeRapport = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Doc ID incorrect" });
  }
  const deletedRapport = await Rapport.findByIdAndDelete(id);
  if (!deletedRapport) {
    return res.status(400).json({ error: "❌ No such document exist" });
  }
  res.status(200).json(deletedRapport);
};
