import mongoose from "mongoose";
import Rapport from "../models/rapportModel.js";
// !HANDLE RAPPORT CREATION
export const addRapport = async (req, res) => {
  const { name, description, docFormat, nPages, nExemplaires, nPagesImp } =
    req.body;
  const { idProject } = req.params;
  console.log(idProject);

  try {
    const currRapport = await Rapport.create({
      name,
      description,
      docFormat,
      nPages,
      nExemplaires,
      nPagesImp: nPages * nExemplaires,
      project: idProject,
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

export const getRapport = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "ID incorrect" });
  }
  const currRapport = await Rapport.findById(id).populate("project");
  if (!currRapport) {
    return res.status(400).json({ error: "There is no such rapport" });
  }
  res.status(200).json(currRapport);
};

export const updateRapport = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Id incorrect" });
  }
  const updadtedObject = await Rapport.findByIdAndUpdate(id, req.body);

  if (!updadtedObject) {
    return res.status(400).json({ error: " ❌ Nothing Found" });
  }
  res.status(200).json(updadtedObject);
};
