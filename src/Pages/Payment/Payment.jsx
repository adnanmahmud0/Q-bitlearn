import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Classes = () => {
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
    const itemsPerPage = 10; // Matches the backend limit
    const axiosPublic = useAxiosPublic();

    // Fetch classes with TanStack Query
    const { data, isLoading, error, isFetching } = useQuery(
        ["classes", currentPage], // Unique query key including currentPage
        async () => {
            const { data } = await axiosPublic.get(`/classes?page=${currentPage}&limit=${itemsPerPage}`);
            return data;
        },
        {
            keepPreviousData: true, // Keeps previous data while fetching new page data
            staleTime: 5000, // Data is fresh for 5 seconds
        }
    );

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // If still loading the data
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If an error occurs during fetching
    if (error) {
        return <div>Error: {error.message || "Failed to load classes"}</div>;
    }

    const { data: classes, currentPage: serverPage, totalPages, totalItems } = data;

    // Calculate the range of items being shown
    const startIndex = (serverPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(serverPage * itemsPerPage, totalItems);

    return (
        <div className="p-4 mx-auto max-w-7xl">
            <div className="flex justify-between items-center border p-5 mb-5 rounded-xl shadow">
                <p className="text-sm text-gray-600">
                    Showing {startIndex}-{endIndex} of {totalItems}
                </p>
                {/* Pagination Controls */}
                <div className="flex justify-center">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-600 text-white rounded-l-md"
                    >
                        Previous
                    </button>
                    <div className="flex items-center justify-center px-4">
                        <span>Page {currentPage} of {totalPages}</span>
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-600 text-white rounded-r-md"
                    >
                        Next
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                {classes.map((classItem) => (
                    <div key={classItem?._id} className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
                        <div className="w-full">
                            <img src={classItem?.image} alt={classItem?.name} className="w-full rounded-md object-cover object-top aspect-[230/150]" />
                        </div>
                        <div className="absolute right-2 top-2">
                            <p className="bg-ALPHA text-white text-xs rounded-full p-2">{classItem?.totalEnrollment} Enrolled</p>
                        </div>
                        <div className="p-2 flex-1 flex flex-col">
                            <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{classItem?.title}</h5>
                            <div className="flex-1">
                                <p className="mt-1 text-gray-500 truncate">{classItem?.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap justify-between gap-2 mt-2">
                                        <div className="flex gap-2">
                                            <h6 className="text-sm sm:text-base font-bold text-gray-800">${classItem?.price}</h6>
                                        </div>
                                    </div>
                                    <p className="mt-1 text-xs truncate"><span className="font-bold">Instructor:</span> {classItem?.teacher.name}</p>
                                </div>
                            </div>
                            <Link to={`/Class-Details/${classItem?._id}`} className="flex items-center gap-2 mt-4">
                                <button type="button" className="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">
                                    Enroll
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {isFetching && <div>Fetching new page...</div>} {/* Show indicator while loading */}
        </div>
    );
};

export default Classes;
