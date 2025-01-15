import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiousSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    return axiosSecure;
};

export default useAxiousSecure;