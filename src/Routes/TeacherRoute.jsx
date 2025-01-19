import { Navigate, useLocation } from "react-router-dom";
import useTeacher from "../Pages/Hooks/useTeacher";
import useAuth from "../Pages/Hooks/useAuth";



const TeacherRoute = ({ children }) => {
    
    const { user, loading } = useAuth();
    const [isTeacher, isTeacherLoading] = useTeacher();
    const location = useLocation();

    if (loading || isTeacherLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isTeacher) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default TeacherRoute;