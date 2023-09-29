import plantSchema from "../../../server/Plants.js";
import MyGardenSchema from "../../../server/MyGarden.js";
import dbConnect from "@/server/db.js";
const plantId = plantSchema.data.id;
const Trefle_API_KEY = "token=u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA";


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?${Trefle_API_KEY}`
    );
  } else if (req.method === "POST") {
  }
}
