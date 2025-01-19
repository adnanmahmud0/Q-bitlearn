import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Classes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const axiosPublic = useAxiosPublic();
    const itemsPerPage = 10;

    // Fetch function
    const fetchClasses = async (page) => {
        const { data } = await axiosPublic.get(`/classes?page=${page}&limit=${itemsPerPage}`);
        return data;
    };

    // useQuery with the correct object format
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        refetch,
    } = useQuery({
        queryKey: ["classes", currentPage],
        queryFn: () => fetchClasses(currentPage),
        keepPreviousData: true,
        staleTime: 5000,
    });

    const classesData = data?.data || [];
    const totalPages = data?.totalPages || 1;
    const totalItems = data?.totalItems || 0;

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-red-500 text-center">
                    <p className="text-lg font-bold">Failed to load classes</p>
                    <p className="text-sm">{error.message}</p>
                    <button
                        onClick={refetch}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    // Pagination controls
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="p-4 mx-auto max-w-7xl">
            <div className="flex justify-between items-center border p-5 mb-5 rounded-xl shadow">
                <p className="text-sm text-gray-600">
                    Showing {startIndex}-{endIndex} of {totalItems}
                </p>
                <div className="flex justify-center text-xs">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-l-md disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <div className="flex items-center justify-center px-4">
                        <span>Page {currentPage} of {totalPages}</span>
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-r-md disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            {isFetching && (
                <div className="text-center text-yellow-500 mb-4">
                    Fetching latest data...
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                {classesData.map((classItem, index) => (
                    <div
                        key={index}
                        className="bg-[#F3F4F6] rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative"
                    >
                        <div className="w-full">
                            <img
                                src={classItem?.image}
                                alt={classItem?.name}
                                className="w-full rounded-md object-cover object-top aspect-[230/150]"
                            />
                        </div>
                        <div className="absolute right-2 top-2">
                            <p className="bg-yellow-500 text-white text-xs rounded-full p-2">
                                {classItem?.totalEnrollment} Enrolled
                            </p>
                        </div>
                        <div className="p-2 flex-1 flex flex-col">
                            <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                                {classItem?.title}
                            </h5>
                            <div className="flex-1">
                                <p className="mt-1 text-gray-500 truncate">
                                    {classItem?.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap justify-between gap-2 mt-2">
                                        <div className="flex gap-2">
                                            <h6 className="text-sm sm:text-base font-bold text-[#F2277E]">
                                                ${classItem?.price}
                                            </h6>
                                        </div>
                                    </div>
                                    <p className="mt-1 text-xs truncate">
                                        <span className="font-bold">Instructor:</span>{" "}
                                        {classItem?.teacher.name}
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={`/Class-Details/${classItem?._id}`}
                                className="flex items-center gap-2 mt-4"
                            >
                                <button
                                    type="button"
                                    className="text-sm px-2 min-h-[36px] w-full bg-[#FFBB01] hover:bg-[#592ADF] text-white tracking-wide ml-auto outline-none border-none rounded"
                                >
                                    Enroll
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
