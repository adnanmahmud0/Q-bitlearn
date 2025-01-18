import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiousSecure from "./useAxiousSecure";



const useTeacher = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiousSecure();
    const { data: isTeacher, isPending: isTeacherLoading } = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is teacher', user)
            const res = await axiosSecure.get(`/users/teacher/${user.email}`);
            console.log(res.data);
            return res.data?.teacher;
        }
    })
    return [isTeacher, isTeacherLoading]
};

export default useTeacher;