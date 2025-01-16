import React, { useContext, useState } from "react";
import { MdAssignment } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";


const EnrollClassDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const { id } = useParams();

    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const userEmail = user?.email;

    const axiosSecure = useAxiousSecure();
    const { data } = useQuery({
        queryKey: ["teacher", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/class/${id}`);
            return data;
        },
    });

    const teacherEmail = data?.teacher?.email;

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSend = () => {
        const ratingData = {
            photoURL,
            displayName,
            userEmail,
            description,
            rating,
            teacherEmail
        };
        axiosSecure.post('/rating', ratingData);
        setIsModalOpen(false);
        
    };

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>

                        <section className="main-content w-full overflow-auto p-6">
                            <div className="flex justify-between">
                                <button className="btn" onClick={handleModalToggle}>
                                    + Teaching Evaluation Report
                                </button>
                                <button className="btn">Button</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Title & Description</th>
                                            <th>Deadline</th>
                                            <th>Status</th>
                                            <th>Your Assignment Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <MdAssignment className="size-8" />
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>12-05-2025</p>
                                            </td>
                                            <td>
                                                <p>Not Submitted</p>
                                            </td>
                                            <td>
                                                <form>
                                                    <input
                                                        type="text"
                                                        placeholder="Type here"
                                                        className="input input-bordered input-sm w-full max-w-xs"
                                                    />
                                                    <button className="btn btn-sm ml-5">Small</button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                            <h2 className="text-xl font-bold mb-4">Teaching Evaluation Report</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Description</label>
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    rows="4"
                                    placeholder="Write your feedback..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Rating</label>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={rating}
                                    onChange={handleRatingChange}
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button className="btn btn-outline" onClick={handleModalToggle}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleSend}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EnrollClassDetails;
