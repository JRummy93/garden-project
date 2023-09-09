import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const FindMyPlant = () => {
    const router = useRouter();
    
    return (
        <>
        <Navbar />
        <h1>Find My Plant</h1>
        </>
    );
}

export default FindMyPlant;