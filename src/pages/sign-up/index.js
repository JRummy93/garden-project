import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Typography, Stack } from "@mui/material";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignUp,
} from "@clerk/nextjs";

const SignUpPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Typography variant="h4" color={"primary.dark"}>
          Sign-Up
        </Typography>
        <SignUp />
      </Stack>
      <Footer />
    </>
  );
};
export default SignUpPage;
