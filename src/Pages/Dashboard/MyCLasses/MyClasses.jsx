import React, { useContext, useState } from 'react';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import Swal2

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiousSecure();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 8;

    const { data: classesData = {}, isLoading, error, refetch } = useQuery({
        queryKey: ["classes", currentPage],
        queryFn: async () => {
            const response = await axiosSecure.get(`/MyClasses?&email=${user.email}&page=${currentPage}&limit=${limit}`);
            return response?.data;
        },
    });

    const { classes = [], total } = classesData;
    const totalPages = Math.ceil(total / limit);

    const handleUpdate = async (id) => {
        navigate(`/Dashboard/MyClassUpdate/${id}`);
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This will permanently delete the class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FFBB01',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.delete(`/deleteMyClasses/${id}`);
                refetch();
                Swal.fire(
                    'Deleted!',
                    'The class has been deleted.',
                    'success'
                );
            }
        });
    };

    const classDetailsHandler = (id) => {
        navigate(`/Dashboard/MyClassDetails/${id}`);
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
                                        <th>Price</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
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
                                            <td>{cls?.price}৳</td>
                                            <td>{cls?.teacher?.email}</td>
                                            <td>
                                                <div>
                                                    <p className={`btn btn-xs ${cls?.status === 'approved' ? 'text-[#FFBB01]' : cls?.status === 'pending' ? 'text-[#F22480]' : 'text-[#592ADF]'}`}>{cls?.status}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="space-x-5 flex">
                                                    <button className="btn btn-outline btn-xs" onClick={() => handleUpdate(cls?._id)} style={{ backgroundColor: '#592ADF', color: 'white' }}>Update</button>
                                                    <button className="btn btn-outline btn-xs" onClick={() => handleDelete(cls?._id)} style={{ backgroundColor: '#F22480', color: 'white' }}>Delete</button>
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => classDetailsHandler(cls?._id)} className="btn btn-sm" disabled={cls?.status === "reject" || cls?.status === "pending"} style={{ backgroundColor: '#FFBB01' }}>
                                                    See Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {classes?.length === 0 && (
                                <div className="text-center py-10">
                                    <p className="text-gray-500">No classes available.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-max font-[sans-serif]">
                                <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 mr-2" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
                                    </svg>
                                    Previous
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li
                                        key={index}
                                        className={`flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-base font-bold ${currentPage === index + 1 ? 'bg-gray-100 text-gray-800' : 'text-gray-500'}`}
                                        onClick={() => setCurrentPage(index + 1)}>
                                        {index + 1}
                                    </li>
                                ))}
                                <li className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 ml-2 rotate-180" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
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

export default MyClasses;
