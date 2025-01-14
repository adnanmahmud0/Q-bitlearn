import React, { useEffect, useState } from "react";
import axios from "axios";

const Classes = () => {
    const [classes, setClasses] = useState([]); // Ensure classes is an empty array initially
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        axios.get("http://localhost:5000/classes")
            .then(response => {
                if (Array.isArray(response.data)) {
                    setClasses(response.data); // Store the data in state if it's an array
                } else {
                    setError("Invalid data format received.");
                }
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(err => {
                setError("Error fetching data");
                setLoading(false); // Set loading to false if there was an error
            });
    }, []); // Empty dependency array to run this only once when the component mounts

    // Check if classes is an array before using slice
    const currentClasses = Array.isArray(classes) ? classes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    // Handle page changes
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Total number of pages
    const totalPages = Math.ceil(classes.length / itemsPerPage);

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching
    }

    if (error) {
        return <div>{error}</div>; // Show error message if there's an error
    }

    return (
        <div className="p-4 mx-auto max-w-7xl">
            <div className="grid grid-cols-3 gap-4">
                {currentClasses.map((classItem, index) => (
                    <div key={index} className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all relative">
                        <div className="w-full">
                            <img src={classItem.image} alt={classItem.name} className="w-full object-cover object-top aspect-[230/150]" />
                        </div>
                        <div className="absolute right-2 top-2">
                            <p className="bg-ALPHA text-white text-xs rounded-full p-2">{classItem.totalEnrollment} Enrolled</p>
                        </div>
                        <div className="p-2 flex-1 flex flex-col">
                            <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{classItem.title}</h5>
                            <div className="flex-1">
                                <p className="mt-1 text-gray-500 truncate">{classItem.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap justify-between gap-2 mt-2">
                                        <div className="flex gap-2">
                                            <h6 className="text-sm sm:text-base font-bold text-gray-800">${classItem.price}</h6>
                                        </div>
                                    </div>
                                    <p className="mt-1 text-xs truncate"><span className="font-bold">Instructor:</span> {classItem.teacher.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <button type="button" className="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
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
    );
};

export default Classes;
