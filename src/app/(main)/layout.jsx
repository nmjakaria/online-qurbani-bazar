import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/shared/Navbar";

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {children}
        </div>
    );
};

export default Mainlayout;