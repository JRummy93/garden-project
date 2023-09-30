import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Container, Stack } from "@mui/material";

  const PlantDetailPage = () => {
  const [Plant, setPlant] = useState({});
  const router = useRouter();

  useEffect(() => {
    
  async function fetchPlant() {
    
    const id = router.query.id;
    fetch(`/api/explore/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
    .then(response => response.json())
    .then(data => {
      setPlant(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};  
    fetchPlant();
    }, [router.query.id]);

  return (
    <>
      <Navbar />
      <Container>
        <Stack alignItems="center" spacing={4} p={4}>
            <h1>Plant Details</h1>
            {Plant.data && (
              <>
                 <h2>{Plant.data.common_name}</h2>
                <h2>{Plant.data.id}</h2>
                <h2>{Plant.data.scientific_name}</h2>
                <img src={Plant.data.image_url} alt="default plant image" style={{ width: "50%" , height: "50%" }}></img>
              </>
            )}
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default PlantDetailPage;
