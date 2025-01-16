import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    if(user){
        
    } 
    return (
        <div>
            
        </div>
    );
};

export default MyProfile;