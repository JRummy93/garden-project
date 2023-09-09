import { getPlantData } from '../path/to/getPlantData';

export default function PlantCard({ plantId }) {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    getPlantData(plantId)
      .then((data) => setPlant(data))
      .catch((error) => console.error(error));
  }, [plantId]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="plant-card">
      <h2>{plant.name}</h2>
      <p>Family: {plant.family}</p>
      <p>Watering Frequency: {plant.wateringFrequency}</p>
      {/* Add more plant details here */}
    </div>
  );
}

