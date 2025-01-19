import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiousSecure from "./useAxiousSecure";


const useUser = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiousSecure();
    const { data: isUser, isPending: isUserLoading } = useQuery({
        queryKey: [user?.email, 'isUser'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is User', user)
            const res = await axiosSecure.get(`/users/user/${user.email}`);
            console.log(res.data);
            return res.data?.user;
        }
    })
    return [isUser, isUserLoading]
};

export default useUser;