import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MyGarden = () => {
    const router = useRouter();
    
    return (
        <>
        <Navbar />
        <h1>My Garden</h1>
        <Footer />
        </>
    );
};

export default MyGarden;