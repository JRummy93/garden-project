import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userID: { type: String, unique: true, required: true },
  garden: [{ type: Schema.Types.ObjectId, ref: 'Plant' }],
});

export default mongoose.models.User || model("User", UserSchema);

// user saved plants in a DB, and user saved plants in a garden