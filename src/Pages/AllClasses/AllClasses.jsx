import React, { useState } from 'react';
import useAxiousSecure from '../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllClasses = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiousSecure();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 8;

    const { data: classesData = {}, isLoading, error, refetch } = useQuery({
        queryKey: ["classes", currentPage],
        queryFn: async () => {
            const response = await axiosSecure.get(`/adminClasses?page=${currentPage}&limit=${limit}`);
            return response.data;
        },
    });

    const { classes = [], total = 0 } = classesData || {};
    const totalPages = Math.max(Math.ceil(total / limit), 0); // Ensure totalPages is a valid number >= 0

    const handleApprove = async (id) => {
        try {
            await axiosSecure.patch(`/adminClasses/approve/${id}`);
            refetch();
            Swal.fire({
                icon: 'success',
                title: 'Class Approved',
                text: 'The class has been successfully approved.',
                confirmButtonColor: '#592ADF',
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Failed to approve class: ${err.message}`,
            });
        }
    };

    const handleDisapprove = async (id) => {
        try {
            await axiosSecure.patch(`/adminClasses/disapprove/${id}`);
            refetch();
            Swal.fire({
                icon: 'error',
                title: 'Class Rejected',
                text: 'The class has been rejected.',
                confirmButtonColor: '#F22480',
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Failed to reject class: ${err.message}`,
            });
        }
    };

    const classDetailsHandler = (id) => {
        navigate(`/Dashboard/MyClassDetails/${id}`);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#592ADF] border-r-[#F22480] border-b-[#FFBB01] border-l-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-red-500">Failed to load classes: {error.message}</p>
                <button onClick={refetch} className="btn btn-outline mt-4">
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="relative pt-[70px] h-screen">
            <div>
                <div className="flex items-start">
                    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                        {/* Sidebar content */}
                    </nav>

                    <section className="main-content w-full overflow-auto p-6">
                        <div className="overflow-x-auto">
                            <table className="table w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr>
                                        <th>Title and Description</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(classes) && classes.length > 0 ? (
                                        classes.map((cls, index) => (
                                            <tr key={cls?.id || index} className="hover:bg-gray-100">
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={cls?.image || "https://via.placeholder.com/48"}
                                                                    alt="Class Thumbnail"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{cls?.title}</div>
                                                            <div className="text-sm opacity-50">{cls?.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{cls?.teacher?.email}</td>
                                                <td>
                                                    <div className="space-x-5 flex">
                                                        <div hidden={cls?.status !== "approved"}>
                                                            <button className="btn btn-disabled btn-xs">Approved</button>
                                                        </div>
                                                        <div hidden={cls?.status === "approved"}>
                                                            <button className="btn btn-outline btn-xs text-[#592ADF]" onClick={() => handleApprove(cls?._id)}>Approve</button>
                                                            <button className="btn btn-outline btn-xs text-[#F22480]" onClick={() => handleDisapprove(cls?._id)}>Reject</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button onClick={() => classDetailsHandler(cls?._id)} className="btn btn-sm text-[#FFBB01]">See Progress</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-10 text-gray-500">
                                                No classes available.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-max font-[sans-serif]">
                                <li
                                    className={`flex items-center justify-center shrink-0 px-4 py-2 ${
                                        currentPage === 1 ? "cursor-not-allowed text-gray-300" : "hover:bg-gray-50 cursor-pointer text-gray-800"
                                    }`}
                                    onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
                                >
                                    Previous
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-center justify-center shrink-0 px-4 py-2 ${
                                            currentPage === index + 1 ? "bg-gray-100 text-gray-800" : "hover:bg-gray-50 cursor-pointer text-gray-500"
                                        }`}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </li>
                                ))}
                                <li
                                    className={`flex items-center justify-center shrink-0 px-4 py-2 ${
                                        currentPage === totalPages ? "cursor-not-allowed text-gray-300" : "hover:bg-gray-50 cursor-pointer text-gray-800"
                                    }`}
                                    onClick={() => currentPage < totalPages && setCurrentPage((prev) => prev + 1)}
                                >
                                    Next
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllClasses;
