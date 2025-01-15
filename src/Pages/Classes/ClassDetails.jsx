import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ClassDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/class/${id}`);
                setData(response.data);  // Store the actual data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <>
            <div className="bg-white">
                <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className="px-4 py-10 rounded shadow-md relative">
                                <img src={data?.image || "fallback-image.jpg"} alt={data?.title} className="w-4/5 aspect-[251/171] rounded object-cover mx-auto" />
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold text-gray-800">{data?.title}</h3>
                            <div className="flex items-center space-x-1 mt-2">
                                <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <h4 className="text-gray-500 text-base !ml-3">500 Reviews</h4>
                            </div>

                            <p className="text-sm text-gray-500 mt-2">{data?.description}</p>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <p className="text-gray-800 text-2xl font-bold">${data?.price}</p>
                            </div>

                            <div className="flex gap-4 mt-12 max-w-md">
                                <Link to={`/Payment/${id}`} type="button" className="w-full text-center px-4 py-2.5 outline-none border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Play now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6">
                        <h3 className="text-xl font-bold text-gray-800">Product information</h3>
                        <ul className="mt-4 space-y-6 text-gray-800">
                            <li className="text-sm">Category <span className="ml-4 float-right">{data?.category}</span></li>
                            <li className="text-sm">Instructor <span className="ml-4 float-right">{data?.teacher?.name}</span></li>
                            <li className="text-sm">Total Enrollment <span className="ml-4 float-right">{data?.totalEnrollment}</span></li>
                            <li className="text-sm">Total Assignment<span className="ml-4 float-right">2</span></li>
                        </ul>
                    </div>

                    <div className="mt-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6">
                        <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                        <div className="grid md:grid-cols-2 gap-12 mt-4">
                            <div className="space-y-3 max-w-md">
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                        <div className="w-2/3 h-full rounded bg-blue-600"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                                    <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                        <div className="w-1/3 h-full rounded bg-blue-600"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                                    <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                        <div className="w-1/4 h-full rounded bg-blue-600"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ClassDetails;