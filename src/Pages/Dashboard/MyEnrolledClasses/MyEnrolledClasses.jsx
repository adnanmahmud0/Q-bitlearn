import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext);

    const email = user?.email;
    const axiosSecure = useAxiousSecure();

    const { data, isLoading, error } = useQuery({
        queryKey: ["pay", email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/enrolled-class?email=${email}`);
            return data;
        },
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2" style={{ borderTopColor: '#FFBB01', borderBottomColor: '#592ADF' }}></div>
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
                            <div className="grid lg:grid-cols-3 gap-4">
                                {Array.isArray(data) && data.length > 0 ? (
                                    data.map((classItem, index) => (
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
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;
