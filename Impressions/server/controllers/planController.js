import mongoose from "mongoose";
import Plan from "../models/planModel.js";

// TODO: POST REQUEST HANDLER FUNCTION
export const addPlan = async (req, res) => {
  const { idProject } = req.params;
  const { name, description, docFormat, nPages, nExemplaires, pagesImp } =
    req.body;

  console.log(idProject);

  try {
    const plan = await Plan.create({
      name,
      description,
      docFormat,
      nPages: 1,
      nExemplaires,
      pagesImp: nExemplaires * nPages,
      project: idProject,
    });
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// * GET THE PLAN DOCUMENT

export const getPlan = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "❌ No such project found ... id invalid" });
  }
  const currPlan = await Plan.findById(id).populate("project");

  if (!currPlan) {
    return res.status(400).json({ error: " ❌ Nothing Found" });
  }
  res.status(200).json(currPlan);
};

//  * UPDATING PLAN

export const updatingPlan = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "❌ No such project found ... id invalid" });
  }
  const updatePlan = await Plan.findByIdAndUpdate(id, req.body);

  if (!updatePlan) {
    return res.status(400).json({ error: " ❌ Nothing Found" });
  }
  res.status(200).json(updatePlan);
};

// DELETE PLANS

export const deletingPlan = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "❌ No such project found ... id invalid" });
  }
  const deletedPlan = await Plan.findByIdAndDelete(id);

  if (!deletedPlan) {
    return res.status(400).json({ error: " ❌ Nothing Found" });
  }
  res.status(200).json(deletedPlan);
};
