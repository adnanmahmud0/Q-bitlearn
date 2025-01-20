import { Link, useParams } from "react-router-dom";
import useAxiousSecure from "../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { IoIosPlayCircle } from "react-icons/io";

const ClassDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiousSecure();

    // Fetch data using TanStack Query v5
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["classDetails", id], // Pass queryKey as an array
        queryFn: async () => {
            const response = await axiosSecure.get(`/class/${id}`);
            return response.data; // Return the data
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#592ADF] border-r-[#F22480] border-b-[#FFBB01] border-l-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-red-500">Error loading class details</h2>
                    <p className="text-gray-500">{error.message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="rounded shadow-md relative">
                            <img
                                src={data?.image || "fallback-image.jpg"}
                                alt={data?.title}
                                className="rounded object-cover mx-auto"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold text-gray-800">{data?.title}</h3>
                        <p className="text-sm text-gray-500 mt-2">{data?.description}</p>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <p className="text-gray-800 text-2xl font-bold">${data?.price}</p>
                        </div>

                        <div className="flex gap-4 mt-12 max-w-md">
                            <Link
                                to={`/Payment/${id}`}
                                type="button"
                                className="text-center px-10 py-2 outline-none bg-[#FFBB01] hover:bg-[#592ADF] text-white text-sm font-semibold rounded"
                            >
                                <IoIosPlayCircle className="size-8" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6">
                    <h3 className="text-xl font-bold text-gray-800">Product information</h3>
                    <ul className="mt-4 space-y-6 text-gray-800">
                        <li className="text-sm">
                            Category <span className="ml-4 float-right">{data?.category}</span>
                        </li>
                        <li className="text-sm">
                            Instructor <span className="ml-4 float-right">{data?.teacher?.name}</span>
                        </li>
                        <li className="text-sm">
                            Total Enrollment <span className="ml-4 float-right">{data?.totalEnrollment}</span>
                        </li>
                        <li className="text-sm">
                            Total Assignment<span className="ml-4 float-right">2</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;
