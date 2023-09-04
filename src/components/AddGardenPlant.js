const GardenPlant = require('./models/gardenPlant'); // Assuming you have a model for garden plants

// Function to add a plant to a user's garden
async function addPlantToGarden(userId, plantId) {
  try {
    const existingPlant = await GardenPlant.findOne({ id: plantId });

    if (existingPlant) {
      await User.findByIdAndUpdate(userId, { $addToSet: { garden: existingPlant._id } });
    } else {
      const plantDataFromApi = await fetchPlantDataFromApi(plantId);

      const newPlant = new GardenPlant(plantDataFromApi);
      await newPlant.save();

      await User.findByIdAndUpdate(userId, { $addToSet: { garden: newPlant._id } });
    }

    return 'Plant added to garden successfully';
  } catch (error) {
    console.error('Error adding plant to garden:', error);
    throw error;
  }
}

// Example usage:
// userId: The ID of the user
// plantId: The ID of the plant from the external API
addPlantToGarden(userId, plantId)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
