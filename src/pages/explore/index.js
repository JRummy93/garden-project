import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PlantSearch from '@/components/PlantSearch';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function Explore() {
    const [result, setResult] = useState([]);
  
    useEffect(() => {
const fetchData = async () => {
  try {
    const response = await fetch("/api/explore");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setResult(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  fetchData();
    }, []);
  
    return (
      <>
        <Head>
          <title>Garden App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <Navbar />
          <h1>Explore</h1>
          <PlantSearch/>
          {Array.isArray(result.data) && result.data.length > 0 ? (
            result.data.map((data) => (
              <div key={data.id}>
                <h2>{data.common_name}</h2>
                <p>{data.scientific_name}</p>
                {/* Add more data fields as needed */}
                {data.image_url ? (
                  <div>
                    <img src={data.image_url} alt="Default Image" />
                  </div>
                ) : (
                  <p>No default image available</p>
                )}
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </main>
        <Footer />
      </>
    );
  };

