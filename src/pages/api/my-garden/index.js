import plantSchema from "../../../server/Plants.js";
import MyGardenSchema from "../../../server/MyGarden.js";
import { getSession } from "@clerk/nextjs";
import dbConnect from "@/server/db.js";

const plantId = plantSchema.data.id;

export default async function handler(req, res) {
    const db = await dbConnect();
    const userId = session.user.id;

    if (req.method === 'GET') {
          const session = await getSession({ req });
    
          if (!session) {
            return res.status(401).json({ error: 'Unauthorized' });
          }

          const userGarden = .findOne({ UserId: userId });
    
          if (!userGarden) {
            return res.status(404).json({ error: 'User garden not found' });
          }
    
          return res.status(200).json(userGarden.MyPlants);
        } catch (error) {
          console.error('Error fetching user garden:', error);
          return res.status(500).json({ error: 'Server error' });
        }
      }
    
}