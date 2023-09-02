import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  garden: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }],
  },
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
