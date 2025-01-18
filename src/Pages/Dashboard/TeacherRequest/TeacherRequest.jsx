import { FcApprove, FcDisapprove } from "react-icons/fc";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const TeacherRequest = () => {

    const axiosSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);

    const email = user?.email;

    const { data: teacherRequests = [], refetch } = useQuery({
        queryKey: ["teacherreq"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/teacher`);
            return data;
        },
    });

    console.log(email);

    const handleApprove = async (id) => {
        await axiosSecure.patch(`/teacher/approve/${id}`);
        await axiosSecure.put(`/teacherUsers?email=${email}`, { role: 2 });
        refetch();
    };

    const handleDisapprove = async (id) => {
        await axiosSecure.patch(`/teacher/disapprove/${id}`);
        refetch();
    };


    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                        <section className="main-content w-full overflow-auto p-6">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>User & Experience</th>
                                            <th>Title & Category</th>
                                            <th>Status</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teacherRequests.map((teacher) => (
                                            <tr key={teacher._id}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={teacher.photoURL}
                                                                    alt={teacher.displayName}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{teacher.displayName}</div>
                                                            <div className="text-sm opacity-50">
                                                                {teacher.experience}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {teacher.title}
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">
                                                        {teacher.category}
                                                    </span>
                                                </td>
                                                <td>{teacher.status}</td>
                                                <th>
                                                    <div>
                                                        <FcApprove className="size-7 cursor-pointer" onClick={() => handleApprove(teacher._id)} />
                                                        <FcDisapprove className="size-7 cursor-pointer" hidden={teacher?.status === "Approved"} onClick={() => handleDisapprove(teacher._id)} />
                                                    </div>
                                                </th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherRequest;
