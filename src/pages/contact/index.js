import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const Contact = () => {
    const router = useRouter();
    
    return (
        <>
        <Navbar />
        <h1>Contact</h1>
        </>
    );
}
export default Contact;