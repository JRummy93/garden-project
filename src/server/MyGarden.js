const mongoose = require("mongoose");

const myGardenSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true,
    unique: true,
  },
  MyPlants: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],
});

export default mongoose.models.MyGarden ||
  mongoose.model("MyGarden", myGardenSchema, "GardenPlant");
