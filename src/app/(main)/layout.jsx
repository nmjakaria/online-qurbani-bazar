import CartDrawer from "@/components/cart/CartDrawer";
import Banner from "@/components/homepage/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const Mainlayout = ({ children }) => {
    return (
        <div>
            {children}
            <CartDrawer></CartDrawer>
        </div>
    );
};

export default Mainlayout;