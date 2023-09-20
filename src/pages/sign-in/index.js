import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SignIn } from "@clerk/nextjs";
import { Stack, Typography } from "@mui/material";

const SignInPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h3" color={"primary.dark"}>
          Sign-In
        </Typography>
        <SignIn />
      </Stack>
      <Footer />
    </>
  );
};

export default SignInPage;
