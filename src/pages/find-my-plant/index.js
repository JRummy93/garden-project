import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useUser } from "@clerk/nextjs";
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
      <Stack alignItems="center" spacing={4} p={4}>
        <h1>Find My Plant</h1>
        {user ? (
          <Typography variant="h5">
            Hello, {user.firstName}! Are you needing help identifying a plant?
          </Typography>
        ) : (
          <Typography variant="h5">Loading...</Typography>
        )}
      </Stack>
      <Footer />
    </>
  );
};

export default FindMyPlant;
