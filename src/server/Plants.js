const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
});

const GardenPlant = mongoose.model('GardenPlant', plantSchema);

module.exports = GardenPlant;
