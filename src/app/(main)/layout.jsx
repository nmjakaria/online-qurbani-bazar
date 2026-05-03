import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;