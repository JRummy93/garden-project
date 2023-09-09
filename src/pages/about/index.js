import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <h1>About Us</h1>
    </>
  );
};
export default About;
