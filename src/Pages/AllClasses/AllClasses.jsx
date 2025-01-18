import React, { useState } from 'react';
import useAxiousSecure from '../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const AllClasses = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiousSecure();
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const limit = 8; // Limit per page

    const { data: classesData = {}, isLoading, error, refetch } = useQuery({
        queryKey: ["classes", currentPage],
        queryFn: async () => {
            const response = await axiosSecure.get(`/adminClasses?page=${currentPage}&limit=${limit}`);
            return response.data;
        },
    });

    const { classes = [], total } = classesData; // Destructuring response data
    const totalPages = Math.ceil(total / limit); // Calculate total pages

    const handleApprove = async (id) => {
        await axiosSecure.patch(`/adminClasses/approve/${id}`);
        refetch();
    };

    const handleDisapprove = async (id) => {
        await axiosSecure.patch(`/adminClasses/disapprove/${id}`);
        refetch();
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500">Failed to load classes: {error.message}</p>
            </div>
        );
    }

    const classDetealsHandeler = (id) =>{
        navigate(`/Dashboard/MyClassDetails/${id}`);
    }

    return (
        <div className="relative pt-[70px] h-screen">
            <div>
                <div className="flex items-start">
                    {/* Sidebar */}
                    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                        {/* Sidebar content */}
                    </nav>

                    {/* Main content */}
                    <section className="main-content w-full overflow-auto p-6">
                        <div className="overflow-x-auto">
                            <table className="table w-full border-collapse border border-gray-200">
                                {/* Table header */}
                                <thead>
                                    <tr>
                                        <th>Title and Description</th>
                                        <th>Email</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody>
                                    {classes.map((cls, index) => (
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
                                            <td>{cls?.category}</td>
                                            <td>
                                                <div className="space-x-5 flex">
                                                    <div disabled={cls?.status === "approved"} hidden={cls?.status === "rejected" || cls?.status === "pending"}  >
                                                        <button className="btn btn-disabled btn-xs">Approved</button>
                                                    </div>
                                                    <div hidden={cls?.status === "approved"} >
                                                        <button className="btn btn-outline btn-xs" onClick={() => handleApprove(cls?._id)}>Approve</button>
                                                    </div>
                                                    <div hidden={cls?.status === "approved"}>
                                                        <button className="btn btn-outline btn-xs" onClick={() => handleDisapprove(cls?._id)}>Reject</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => classDetealsHandeler(cls?._id)} className="btn btn-sm">See Progress</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* No data message */}
                            {classes?.length === 0 && (
                                <div className="text-center py-10">
                                    <p className="text-gray-500">No classes available.</p>
                                </div>
                            )}
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            <div className="btn-group">
                                <button
                                    className="btn"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    «
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    className="btn"
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    »
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllClasses;
