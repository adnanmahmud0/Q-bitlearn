import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(loading)
    console.log(user)
    const location = useLocation();

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#592ADF] border-r-[#F22480] border-b-[#FFBB01] border-l-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );

    if (user && user?.email) {
        return children;
    }
    // console.log(location.pathname);
    return <Navigate to="/Login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;