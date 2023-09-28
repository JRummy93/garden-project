import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  rating: { type: Number },
  comment: { type: String },
});

export default mongoose.models.Rating || model("Rating", RatingSchema);
