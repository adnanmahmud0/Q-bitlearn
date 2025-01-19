import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(loading)
    console.log(user)
    const location = useLocation();

    if (loading) {
        // console.log(loading);
        return <progress className="progress w-56"></progress>
    }

    if (user && user?.email) {
        return children;
    }
    // console.log(location.pathname);
    return <Navigate to="/Login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;