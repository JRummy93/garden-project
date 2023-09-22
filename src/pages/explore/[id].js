import { useRouter } from "next/router";
import FetchTrefle from "../api/explore/index";
import PlantByid from "../api/explore/[id]";
import { useEffect, useState } from "react";

const PlantDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [Plant, setPlant] = useState({});

  async function fetchPlant() {
    const response = await fetch(`/api/explore/${id}`);
    const data = await response.json();
    setPlant(data);
  }

  useEffect(() => {
    if (id) {
      fetchPlant();
    }
  }, [id]);

  return (
    <>
      <h1>Plant Details</h1>
      <h2>{Plant.id}</h2>
    </>
  );
};

export default PlantDetailPage;
