import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Garden App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Stack className="LandingBody">
          <div className="LogoText">
            <img
              src="/GroWiseLogoCropped.png"
              alt="GroWise Logo"
              id="LandingLogo"
            />
            <Typography variant="h4" className="LandingText">
              Grow Wiser in your plant escapades with GroWise!
            </Typography>
            <Typography variant="h5" className="LandingText">
              Your new favorite gardening tool that not only helps you find
              important information on plants, but also helps remind you when
              you to need to water them!
            </Typography>
          </div>

          <img
            src="https://m.media-amazon.com/images/I/61k+aJlgLSL.jpg"
            id="LandingHangingPlant"
          />
        </Stack>
      </div>
    </>
  );
}
