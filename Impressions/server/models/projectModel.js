import mongoose, { Schema } from "mongoose";

// * CREATING MONGO SCHEMA BASE ON MY DATA
const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

// TODO CREATING AND EXPORTING THE MODEL DATA BASED ON THE SCHEMA
export default mongoose.model("Project", ProjectSchema);
