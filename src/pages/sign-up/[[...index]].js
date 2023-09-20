import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SignUp } from "@clerk/nextjs";
import { Stack, Typography } from "@mui/material";

const SignUpPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Stack  alignItems="center" spacing={4}>
      <Typography variant="h3" color={'primary.dark'}>Sign-Up</Typography>
      <SignUp />
      </Stack>
      <Footer />
    </>
  );
};

export default SignUpPage;
