import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FindMyPlant = () => {
    const router = useRouter();
    
    return (
        <>
        <Navbar />
        <h1>Find My Plant</h1>
        <Footer />
        </>
    );
}

export default FindMyPlant;