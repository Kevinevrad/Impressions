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
export const updatingProject = async (req, res) => {};

/*
 ?DELETE REQUEST
 *CREATING HANDLE FUNCTION
 *THAT MANAGE THE DELETING OF AN EXISTING PROJECT
 */

export const deletingProject = async (req, res) => {
  //   const { id } = req.params;
  //   const allProject = await Project.find({}).sort({ createdAt: -1 });
  //   if (!mongoose.ObjectId.isValid(id)) {
  //     return res.status(404).json({ error: "❌ NO such project exist§" });
  //   }
  //   if (allProject.find()) {
  //   }
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
