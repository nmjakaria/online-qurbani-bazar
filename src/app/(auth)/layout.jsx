import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;