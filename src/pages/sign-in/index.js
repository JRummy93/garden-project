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
} from "@clerk/nextjs";

const SignInPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <Typography variant="h4" color={"primary.dark"}>
          Sign-in
        </Typography>
        <SignIn />
      </Stack>
      <Footer />
    </>
  );
};
export default SignInPage;
