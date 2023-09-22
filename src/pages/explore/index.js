import React, { useEffect, useState } from "react";
import Head from "next/head";
import PlantSearch from "@/components/PlantSearch";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FetchTrefle from "../api/explore/index";
import PlantCard from "@/components/PlantCard";
import { Stack, Grid } from "@mui/material";

export default function Explore() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    FetchTrefle().then((responseResult) => {
      setResult(responseResult);
    });
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
        <div className="exploreBody">
          <h1>Explore</h1>
          <PlantSearch />
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="exploreGrid"
          >
            {Array.isArray(result.data) && result.data.length > 0 ? (
              result.data.map((data) => (
                <Grid item xs={12} md={6} lg={4}>
                  <PlantCard
                    common_name={data.common_name}
                    scientific_name={data.scientific_name}
                    image_url={data.image_url}
                  />
                </Grid>
              ))
            ) : (
              <p>No data available</p>
            )}
          </Grid>
        </div>
      </main>
      <Footer />
    </>
  );
}
