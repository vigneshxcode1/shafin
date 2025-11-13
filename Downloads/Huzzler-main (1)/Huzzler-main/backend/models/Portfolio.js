import { Schema, model } from "mongoose";

const portfolioSchema = new Schema(
  {
    email: { type: String, required: true },
    projectTitle: { type: String, required: true },
    projectDescription: { type: String, required: true },
    skills: { type: [String], default: [] },
    tools: { type: [String], default: [] },
    projectURL: { type: String },
    imageUrl: { type: String }, // 🆕 store uploaded image path
  },
  { timestamps: true }
);

export default model("Portfolio", portfolioSchema);
