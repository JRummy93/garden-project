const Trefle_API_KEY = 'token=u07N7SHuaI0uvGrVLkiI2zWl7PLb6ZgwGAfYE9SySnA';

async function FetchTrefle(req, res) {
  const response = await fetch(`https://trefle.io/api/v1/plants?${Trefle_API_KEY}`);
  const data = await response.json();
  res.status(200).json(data);
  res.status(400).end();
}

export default FetchTrefle;