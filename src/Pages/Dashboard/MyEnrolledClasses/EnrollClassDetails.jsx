import React, { useContext, useState } from "react";
import { MdAssignment } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const EnrollClassDetails = () => {
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [assignmentLinks, setAssignmentLinks] = useState({}); // Store inputs for each assignment by ID
    const { id } = useParams(); // course id from URL

    const photoURL = user?.photoURL;
    const displayName = user?.displayName;
    const userEmail = user?.email;

    const axiosSecure = useAxiousSecure();

    const { data: classdata, isLoading, error } = useQuery({
        queryKey: ["teacher", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/class/${id}`);
            return data;
        },
    });

    const { data: assignmentData } = useQuery({
        queryKey: ["assignment", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/assignment/${id}`);
            return data;
        },
    });

    const {
        data: submissionCounts = {},
        isLoading: countsLoading,
        refetch, // Extract refetch function
    } = useQuery({
        queryKey: ["submissionCounts", id],
        queryFn: async () => {
            const counts = {};
            if (assignmentData) {
                for (const assignment of assignmentData) {
                    const { data } = await axiosSecure.get(`/total-submit-userAssignment/${assignment._id}`);
                    counts[assignment._id] = data.count;
                }
            }
            return counts;
        },
        enabled: !!assignmentData, // Ensure the query only runs when assignmentData is available
    });

    console.log(submissionCounts);

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-t-[#592ADF] border-r-[#F22480] border-b-[#FFBB01] border-l-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );

    if (error) return <p>Error loading data</p>;

    const titlename = classdata?.title;

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handle assignment submission
    const handleSubmitAssignment = (assignmentId) => {
        const assignmentLink = assignmentLinks[assignmentId];

        axiosSecure
            .post("/submit-assignment", {
                assignmentId,
                courseId: id,
                assignmentLink,
            })
            .then(() => {
                setIsSubmitted(true);
                refetch(); // Trigger data refresh for submission counts
                Swal.fire({
                    title: "Success!",
                    text: "Assignment submitted successfully!",
                    icon: "success",
                    confirmButtonColor: "#592ADF",
                });
            })
            .catch((err) => {
                console.error("Error submitting assignment:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to submit assignment. Try again.",
                    icon: "error",
                    confirmButtonColor: "#F22480",
                });
            });
    };

    // Handle input change for each assignment
    const handleInputChange = (e, assignmentId) => {
        setAssignmentLinks({
            ...assignmentLinks,
            [assignmentId]: e.target.value, // Store the input value for this specific assignment
        });
    };

    const handleSend = () => {
        const ratingData = {
            photoURL,
            displayName,
            userEmail,
            description,
            rating,
            titlename,
        };
        axiosSecure.post("/rating", ratingData).then(() => {
            setIsModalOpen(false);
            Swal.fire({
                title: "Thank you!",
                text: "Your feedback has been submitted.",
                icon: "success",
                confirmButtonColor: "#592ADF",
            });
        });
    };

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                        <section className="main-content w-full overflow-auto p-6">
                            <div className="flex justify-between">
                                <button
                                    className="btn text-white bg-[#592ADF] hover:bg-[#F22480]"
                                    onClick={handleModalToggle}
                                >
                                    + Teaching Evaluation Report
                                </button>
                                <button className="btn bg-[#FFBB01] text-white hover:bg-[#592ADF]">
                                    See Video
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Title & Description</th>
                                            <th>Deadline</th>
                                            <th>Total Submitted</th>
                                            <th>Your Assignment Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignmentData?.map((assignment) => (
                                            <tr key={assignment._id}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <MdAssignment className="size-8" />
                                                        <div>
                                                            <div className="font-bold">{assignment.title}</div>
                                                            <div className="text-sm opacity-50">{assignment.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{assignment.deadline}</p>
                                                </td>
                                                <td>{submissionCounts[assignment._id] || 0}</td>
                                                <td>
                                                    <form>
                                                        <input
                                                            type="text"
                                                            placeholder="Type here"
                                                            className="input input-bordered input-sm w-full max-w-xs"
                                                            value={assignmentLinks[assignment._id] || ""} // Bind input to the corresponding assignment's value
                                                            onChange={(e) => handleInputChange(e, assignment._id)} // Update the value for the correct assignment
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm ml-5 bg-[#F22480] text-white hover:bg-[#592ADF]"
                                                            onClick={() => handleSubmitAssignment(assignment._id)} // Submit assignment on click
                                                        >
                                                            Submit
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
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
                                <button className="btn text-white bg-[#592ADF] hover:bg-[#F22480]" onClick={handleSend}>
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
