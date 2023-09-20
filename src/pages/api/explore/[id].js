const axios = require('axios');
import dbConnect from '../../../server/db';
import Plants from '../../../server/Plants';
export default async function makeTrefleAPISearchRequest(plantID) {
  try {
    const response = await axios.get('https://trefle.io/api/v1/plants/${plantID}', {
      params: {
        token: 'u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA'
      }
    });
    
    return response.data;
    
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
}

export async function findPlantLocal(req, res) {
    await dbConnect();
  
    if (req.method === "GET") {
      const plants = await Plants.find(
        { data: {scientific_name: {$eq: req.query.name}} },
        { limit: 1 }
      );
  
      res.status(200).json({ plants });
    } else if (req.method === "POST") {
      const newPlant = new Plant(req.body);
      await newPlant.save();
      res.status(201).json(newPlant);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }