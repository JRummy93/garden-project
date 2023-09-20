import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useUser, useAuth } from "@clerk/nextjs";
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";

const FindMyPlant = () => {
    const { user } = useUser();
    const router = useRouter();
  
  
    useEffect(() => {
      if (!user) {
        router.push("/sign-in");
      }
    }, [user, router]);
  
    return (
      <>
        <Navbar />
        <Stack alignItems="center" spacing={4}>
          <h1>Find My Plant</h1>
          {user ? (
            <Typography variant="h5">
              Hello, {user.firstName}! Would you like to find out what plant you have? We would be happy to help!
            </Typography>
          ) : (
            <Typography variant="h5">Loading...</Typography>
          )}
        </Stack>
        <Footer />
      </>
    );
}

export default FindMyPlant;