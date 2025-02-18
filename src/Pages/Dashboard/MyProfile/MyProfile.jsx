import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../Hooks/useAxiousSecure";

const MyProfile = () => {
    const axiosSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);

    const email = user?.email;
    const { data } = useQuery({
        queryKey: ["classes", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${email}`);
            return res.data;
        },
    });

    if (!user) {
        return <div className="text-center text-gray-500">Please log in to view your profile.</div>;
    }

    return (
        <div className="relative pt-[70px] h-screen">
            <div>
                <div className="flex items-start">
                    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                    <section className="main-content w-full overflow-auto p-6">
                        <div className="grid md:grid-cols-2 items-center gap-12 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto p-4">
                            <div className="bg-gray-50 rounded-lg shadow-md">
                                <img
                                    src={user?.photoURL}
                                    className="w-full aspect-[7/7] object-contain rounded-t-lg"
                                    alt="User Profile"
                                />
                            </div>
                            <div className="text-[#F22480]">
                                <h3 className="text-xl md:text-2xl font-bold text-[#592ADF]">Name: {user?.displayName}</h3>
                                <p className="mt-4 text-sm text-gray-800 leading-relaxed">
                                    Role: {data}
                                </p>
                                <div className="mt-8 text-left">
                                    <h4 className="text-base text-[#FFBB01]">Phone Number: {user?.phoneNumber || "+8801642147865"}</h4>
                                    <p className="text-base text-gray-500 mt-0.5">Email: {user?.email}</p>
                                    <p className="text-base text-gray-500 mt-0.5">Address: {user?.address || "Dhaka, Bangladesh"} </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
