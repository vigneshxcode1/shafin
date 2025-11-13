import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    userEmail: { type: String, required: true }, // who created it
    title: String,
    description: String,
    category: String,
    price: Number,
    deliveryDays: Number,
    skills: [String],
    tools: [String],
    requirements: String,
    images: [String], // store URLs
  },
  { timestamps: true }
);

export default model("Service", serviceSchema);
