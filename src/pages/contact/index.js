import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
    const router = useRouter();
    
    return (
        <>
        <Navbar />
        <h1>Contact</h1>
        <Footer />
        </>
    );
}
export default Contact;