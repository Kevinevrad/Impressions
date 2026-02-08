import mongoose, { Schema } from "mongoose";
import Project from "./projectModel.js";
const RapportSchema = new Schema(
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
      required: true,
    },

    nExemplaires: {
      type: Number,
      required: true,
    },

    projet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Project,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Rapport", RapportSchema);
