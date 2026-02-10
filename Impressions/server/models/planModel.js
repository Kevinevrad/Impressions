import mongoose, { Schema } from "mongoose";
import Project from "./projectModel.js";

const PlanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    docFormat: {
      type: String,
      required: true,
    },
    nPages: {
      type: Number,
    },
    nExemplaires: {
      type: Number,
      required: true,
    },
    pagesImp: {
      type: Number,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Project,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Plan", PlanSchema);
