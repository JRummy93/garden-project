import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  rating: { type: Number },
  comment: { type: String },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema, "Reviews");
