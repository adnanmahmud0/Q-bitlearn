import { Navigate, useLocation } from "react-router-dom";

import useUser from "../Pages/Hooks/useUser";
import useAuth from "../Pages/Hooks/useAuth";



const UserRoute = ({ children }) => {
    
    const { user, loading } = useAuth();
    const [isUser, isUserLoading] = useUser();
    const location = useLocation();

    if (loading || isUserLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isUser) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default UserRoute;