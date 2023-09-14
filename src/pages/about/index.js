import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <h1>About Us</h1>
      <Footer />
    </>
  );
};
export default About;
