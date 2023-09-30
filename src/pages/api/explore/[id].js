const Trefle_API_KEY = 'token=u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA';

export default async function fetchPlantById(req, res) {
  if (req.url === `/api/explore/${req.query.id}` && req.method === 'POST') {
    const id  = req.query.id;
    const response = await fetch(`https://trefle.io/api/v1/plants/${id}?${Trefle_API_KEY}`);
    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
