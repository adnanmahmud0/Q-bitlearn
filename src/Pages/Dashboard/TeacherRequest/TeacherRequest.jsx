import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const TeacherRequest = () => {
    const axiosSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);

    const email = user?.email;
    const [disabledTeacherIds, setDisabledTeacherIds] = useState([]);

    const { data: teacherRequests = [], refetch } = useQuery({
        queryKey: ["teacherreq"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/teacher`);
            return data;
        },
    });

    const handleApprove = async (id) => {
        // Confirm the action using SweetAlert2
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to approve this teacher?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#592ADF", // Custom color
            cancelButtonColor: "#FFBB01", // Custom color
            confirmButtonText: "Approve",
        });

        if (result.isConfirmed) {
            await axiosSecure.patch(`/teacher/approve/${id}`);
            await axiosSecure.put(`/teacherUsers?email=${email}`, { role: "Teacher" });
            setDisabledTeacherIds([...disabledTeacherIds, id]); // Disable the buttons after approval
            refetch();
            Swal.fire("Approved!", "The teacher has been approved.", "success");
        }
    };

    const handleDisapprove = async (id) => {
        // Confirm the action using SweetAlert2
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to reject this teacher?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F22480", // Custom color
            cancelButtonColor: "#FFBB01", // Custom color
            confirmButtonText: "Reject",
        });

        if (result.isConfirmed) {
            await axiosSecure.patch(`/teacher/disapprove/${id}`);
            setDisabledTeacherIds([...disabledTeacherIds, id]); // Disable the buttons after disapproval
            refetch();
            Swal.fire("Rejected!", "The teacher has been rejected.", "error");
        }
    };

    return (
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
                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() => !disabledTeacherIds.includes(teacher._id) && handleApprove(teacher._id)}
                                                        className={`btn text-white font-bold ${disabledTeacherIds.includes(teacher._id) || teacher.status === "Approved" || teacher.status === "Disapproved" ? "bg-gray-400 cursor-not-allowed" : "bg-[#592ADF] hover:bg-[#4e1f9b]"}`}
                                                        disabled={disabledTeacherIds.includes(teacher._id) || teacher.status === "Approved" || teacher.status === "Reject"}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => !disabledTeacherIds.includes(teacher._id) && handleDisapprove(teacher._id)}
                                                        className={`btn text-white font-bold ${disabledTeacherIds.includes(teacher._id) || teacher.status === "Disapproved" || teacher.status === "Approved" ? "bg-gray-400 cursor-not-allowed" : "bg-[#F22480] hover:bg-[#e21a6e]"}`}
                                                        disabled={disabledTeacherIds.includes(teacher._id) || teacher.status === "Reject" || teacher.status === "Approved"}
                                                    >
                                                        Reject
                                                    </button>
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
    );
};

export default TeacherRequest;
