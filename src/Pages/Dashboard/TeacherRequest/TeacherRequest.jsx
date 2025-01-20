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
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const { data: teacherRequests = [], refetch } = useQuery({
        queryKey: ["teacherreq", currentPage],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/teacher?page=${currentPage}&limit=${limit}`);
            return data;
        },
    });

    const handleApprove = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to approve this teacher?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#592ADF",
            cancelButtonColor: "#FFBB01",
            confirmButtonText: "Approve",
        });

        if (result.isConfirmed) {
            await axiosSecure.patch(`/teacher/approve/${id}`);
            await axiosSecure.put(`/teacherUsers?email=${email}`, { role: "Teacher" });
            setDisabledTeacherIds([...disabledTeacherIds, id]);
            refetch();
            Swal.fire("Approved!", "The teacher has been approved.", "success");
        }
    };

    const handleDisapprove = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to reject this teacher?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F22480",
            cancelButtonColor: "#FFBB01",
            confirmButtonText: "Reject",
        });

        if (result.isConfirmed) {
            await axiosSecure.patch(`/teacher/disapprove/${id}`);
            setDisabledTeacherIds([...disabledTeacherIds, id]);
            refetch();
            Swal.fire("Rejected!", "The teacher has been rejected.", "error");
        }
    };

    const handlePagination = (newPage) => {
        setCurrentPage(newPage);
        refetch();
    };

    return (
        <div className="relative pt-[70px] h-screen">
            <div>
                <div className="flex items-start">
                    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                    <section className="main-content w-full overflow-auto p-6">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>User & Experience</th>
                                        <th>Title & Category</th>
                                        <th>Status</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teacherRequests.teachers?.map((teacher) => (
                                        <tr key={teacher._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img src={teacher.photoURL} alt={teacher.displayName} />
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
                                                <span className="badge badge-ghost badge-sm">{teacher.category}</span>
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

                            {/* Pagination */}
                            <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-max font-[sans-serif]">
                                <li
                                    className={`flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
                                    onClick={() => currentPage > 1 && handlePagination(currentPage - 1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 mr-2" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        />
                                    </svg>
                                    Previous
                                </li>

                                {/* Page Numbers */}
                                {[...Array(teacherRequests.totalPages)].map((_, index) => (
                                    <li
                                        key={index + 1}
                                        className={`flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-base font-bold ${currentPage === index + 1 ? "!bg-gray-100 text-gray-800" : "text-gray-500"}`}
                                        onClick={() => handlePagination(index + 1)}
                                    >
                                        {index + 1}
                                    </li>
                                ))}

                                <li
                                    className={`flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800 ${currentPage === teacherRequests.totalPages ? "cursor-not-allowed" : ""}`}
                                    onClick={() => currentPage < teacherRequests.totalPages && handlePagination(currentPage + 1)}
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 ml-2 rotate-180" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TeacherRequest;
