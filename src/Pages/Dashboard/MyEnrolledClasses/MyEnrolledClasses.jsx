import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1); // State to track current page
    const email = user?.email;
    const axiosSecure = useAxiousSecure();

    const { data, isLoading, error } = useQuery({
        queryKey: ["pay", email, currentPage],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/enrolled-class?email=${email}&page=${currentPage}&limit=6`);
            return data;
        },
    });

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
        return <div>Error fetching enrolled classes.</div>;
    }

    return (
        <div className="relative pt-[70px] h-screen">
            <div>
                <div className="flex items-start">
                    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>

                    <section className="main-content w-full overflow-auto p-6">
                        <div className="overflow-x-auto">
                            <div className="grid lg:grid-cols-4 gap-4">
                                {Array.isArray(data?.data) && data.data.length > 0 ? (
                                    data.data.map((classItem, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl flex flex-col overflow-hidden hover:shadow-md transition-all relative border-2"
                                        >
                                            <div className="w-full">
                                                <img
                                                    src={classItem.image}
                                                    alt={classItem?.title}
                                                    className="w-full object-cover object-top aspect-[230/150]"
                                                />
                                            </div>
                                            <div className="p-2 flex-1 flex flex-col">
                                                <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{classItem?.title}</h5>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex flex-wrap justify-between gap-2 mt-2">
                                                            <div className="flex gap-2">
                                                                <h6 className="text-sm sm:text-base text-gray-800">
                                                                    <span className="">Instructor:</span> {classItem?.teacher?.name}
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Link
                                                    to={`/Dashboard/Enroll-Class-Details/${classItem?._id}`}
                                                    className="flex items-center gap-2 mt-4"
                                                >
                                                    <button
                                                        type="button"
                                                        className="text-sm px-2 min-h-[36px] w-full"
                                                        style={{
                                                            backgroundColor: '#592ADF',
                                                            color: '#FFF',
                                                            borderRadius: '5px',
                                                        }}
                                                    >
                                                        Continue
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No enrolled classes found.</div>
                                )}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center mt-6">
                                <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-max font-[sans-serif]">
                                    <li
                                        className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 mr-2" viewBox="0 0 55.753 55.753">
                                            <path
                                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                            />
                                        </svg>
                                        Previous
                                    </li>
                                    {Array.from({ length: data?.totalPages }, (_, index) => (
                                        <li
                                            key={index}
                                            className={`flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-base font-bold ${
                                                currentPage === index + 1 ? '!bg-gray-100 text-gray-800' : 'text-gray-500'
                                            }`}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </li>
                                    ))}
                                    <li
                                        className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                        onClick={() => handlePageChange(currentPage + 1)}
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
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;
