import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthLayout;