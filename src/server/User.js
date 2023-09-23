import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  garden: [{ type: Schema.Types.ObjectId, ref: 'Plant' }],
});

export default mongoose.models.User || model("User", UserSchema);

// user saved plants in a DB, and user saved plants in a garden