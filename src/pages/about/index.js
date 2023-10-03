import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Typography, Stack } from "@mui/material";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Stack alignItems="center" spacing={4} p={4}>
        <Typography variant="h4" color={"primary.dark"}>About</Typography>
        <Typography variant="h5">
          This is the about page of the garden project.
        </Typography>
      </Stack>
      <Footer />
    </>
  );
};
export default About;
