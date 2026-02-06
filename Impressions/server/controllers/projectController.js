import Project from "../models/projectModel.js";
import mongoose from "mongoose";
/*
 ?POST REQUEST
 *CREATING HANDLE FUNCTION
 *THAT MANAGE THE CREATION OF A NEW PROJECT
 */
export const creatingProject = async (req, res) => {
  // * DESTRUCTURING THE DATA RECEIVED FROM THE REQUEST
  const { name, description } = req.body;

  try {
    //* ADDING DATA TO THE MODEL IN THE DB
    const project = await Project.create({ name, description });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
 ?PATCH REQUEST
 *CREATING HANDLE FUNCTION
 *THAT MANAGE THE UPDATING OF AN EXISTING PROJECT
 */
export const updatingProject = async (req, res) => {
  const { id } = req.params;
  // const { name, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "❌ No such project found ... id invalid" });
  }
  const projectUpdating = await Project.findByIdAndUpdate(id, req.body);

  if (!projectUpdating) {
    return res.status(400).json({ error: " ❌ Nothing Found" });
  }
  res.status(200).json(projectUpdating);
};

/*
 ?DELETE REQUEST
 *CREATING HANDLE FUNCTION
 *THAT MANAGE THE DELETING OF AN EXISTING PROJECT
 */

export const deletingProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "❌ Project not found id invalid" });
  }
  const projectDeleted = await Project.findByIdAndDelete(id);

  if (!projectDeleted) {
    return res.status(400).json({ error: "❌ Project not found" });
  }
  res.status(200).json({ message: "Element deleted", projectDeleted });
};

/*
 ?GET REQUEST
 *CREATING HANDLE FUNCTION
 *THAT MANAGE TO TAKE A COLLECTION FROM DB
 */

export const getProjects = async (req, res) => {
  try {
    const allProjects = await Project.find({}).sort({ createdAt: -1 });
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
 ?GET REQUEST
 *CREATING HANDLE FUNCTION
 *THAT MANAGE TO TAKE A SINGLE PROJECT FROM DB
 */

export const getProject = async (req, res) => {
  const { id } = req.params;
  //* VERIFING IF THE PROVIDING ID IS CORRECT ---------

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO such project found" });
  }
  const curProject = await Project.findById(id);

  //* VERIFING IF THE OBJECT EXIST --------------------
  if (!curProject) {
    return res.status(400).json({ error: "Nothing found" });
  }
  res.status(200).json(curProject);
};
