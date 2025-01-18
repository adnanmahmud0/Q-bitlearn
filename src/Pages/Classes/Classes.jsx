import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Classes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [classesData, setClassesData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const itemsPerPage = 10; // Matches the backend limit
    const axiosPublic = useAxiosPublic();

    // Fetch paginated data from the server
    const fetchClasses = async (page) => {
        setLoading(true);
        setError("");

        try {
            const { data } = await axiosPublic.get(`/classes?page=${page}&limit=${itemsPerPage}`);
            setClassesData(data?.data);
            setTotalPages(data?.totalPages);
            setTotalItems(data?.totalItems);
        } catch (err) {
            setError("Failed to fetch classes. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClasses(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching
    }

    if (error) {
        return <div>{error}</div>; // Show error message if there's an error
    }

    // Calculate the range of items being shown
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

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
                {classesData?.map((classItem, index) => (
                    <div key={index} className="bg-white rounded p-4 cursor-pointer hover:-translate-y-1 transition-all relative">
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
        </div>
    );
};

export default Classes;
