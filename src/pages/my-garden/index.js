import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const MyGarden = () => {
    const router = useRouter();
    
    return (
        <>
        <Navbar />
        <h1>My Garden</h1>
        </>
    );
};

export default MyGarden;