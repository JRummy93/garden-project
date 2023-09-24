import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useUser } from "@clerk/nextjs";
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";

const MyGarden = () => {
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
        <h1>My Garden</h1>
        {user ? (
          <Typography variant="h5">
            Hello, {user.firstName} welcome to your Garden! Here you will find
            all your saved plants and their easy to read care needs.
          </Typography>
        ) : (
          <Typography variant="h5">Loading...</Typography>
        )}
      </Stack>
      <Footer />
    </>
  );
};

export default MyGarden;
