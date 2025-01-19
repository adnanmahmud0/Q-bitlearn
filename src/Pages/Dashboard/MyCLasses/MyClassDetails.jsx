import React, { useContext, useState } from "react";
import { PiStudent } from "react-icons/pi";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2"; // Import SweetAlert2

const MyClassDetails = () => {
    const classId = useParams();
    const axiosSecure = useAxiousSecure();
    const [showModal, setShowModal] = useState(false);
    const [assignment, setAssignment] = useState({
        classId: classId.id,
        title: "",
        deadline: "",
        description: "",
    });
    const [currentAssignment, setCurrentAssignment] = useState(null);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAssignment({ ...assignment, [name]: value });
    };

    const resetForm = () => {
        setAssignment({
            title: "",
            deadline: "",
            description: "",
        });
    };
    const id = classId?.id;

    const { data, refetch } = useQuery({
        queryKey: ["assignment"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/assignment/${id}`);
            return data;
        },
    });

    const { data: noOfSubAssignment } = useQuery({
        queryKey: ["numberTeacher", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/total-submit-assignment/${id}`);
            return data;
        }
    })

    const handleAddAssignment = () => {
        axiosSecure.post(`/assignment`, assignment).then(() => {
            Swal.fire({
                icon: "success",
                title: "Assignment Created",
                text: "Your new assignment has been created!",
                confirmButtonColor: "#592ADF",
            }).then(() => {
                setShowModal(false);
                resetForm();
                refetch();
            });
        });
    };

    const handleEdit = (assignment) => {
        setCurrentAssignment(assignment);
        setAssignment({
            title: assignment.title,
            deadline: assignment.deadline,
            description: assignment.description,
        });
        setShowModal(true);
    };

    const handleDelete = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#FFBB01",
            cancelButtonColor: "#F22480",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/assignment/${id}`).then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Deleted!",
                        text: "Your assignment has been deleted.",
                        confirmButtonColor: "#592ADF",
                    }).then(() => refetch());
                });
            }
        });
    };

    const handleSaveAssignment = () => {
        if (currentAssignment) {
            // Update existing assignment
            axiosSecure.put(`/assignment/${currentAssignment._id}`, assignment).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Assignment Updated",
                    text: "Your assignment has been updated!",
                    confirmButtonColor: "#592ADF",
                }).then(() => {
                    setShowModal(false);
                    resetForm();
                    setCurrentAssignment(null);
                    refetch();
                });
            });
        } else {
            // Create new assignment
            handleAddAssignment();
        }
    };

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                        <section className="main-content w-full overflow-auto p-6">
                            <div className="md:flex">
                                {/* Card components */}
                                <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                                    <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
                                        <PiStudent className="w-6 size-10 text-blue-600" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-bold text-gray-800">Enrolled</h3>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex mb-2">
                                            <p className="text-sm text-gray-500 flex-1">
                                                Total Enrolled Student:
                                            </p>
                                            <p className="text-xl text-gray-500">50</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                                    <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
                                        <PiStudent className="w-6 size-10 text-blue-600" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-bold text-gray-800">Assignment</h3>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex mb-2">
                                            <p className="text-sm text-gray-500 flex-1">
                                                Total Assignment Created:
                                            </p>
                                            <p className="text-xl text-gray-500">{data?.length}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                                    <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
                                        <PiStudent className="w-6 size-10 text-blue-600" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-bold text-gray-800">Assignment Submitted</h3>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex mb-2">
                                            <p className="text-sm text-gray-500 flex-1">
                                                Total Assignment Submitted:
                                            </p>
                                            <p className="text-xl text-gray-500">{noOfSubAssignment?.count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="relative pt-[70px] h-screen">
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                        <section className="main-content w-full overflow-auto p-6">
                            <div className="flex justify-end mr-5 mt-10">
                                <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ backgroundColor: '#592ADF' }}>
                                    + Create Assignment
                                </button>
                            </div>
                            <div>
                                <table className="table w-full mt-5">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Deadline</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((assignment) => (
                                            <tr key={assignment._id}>
                                                <td>{assignment.title}</td>
                                                <td>{assignment.deadline}</td>
                                                <td>{assignment.description}</td>
                                                <td>
                                                    <div className="space-x-2">
                                                        <button onClick={() => handleEdit(assignment)} className="btn btn-warning btn-sm" style={{ backgroundColor: '#FFBB01' }}>
                                                            Update
                                                        </button>
                                                        <button onClick={() => handleDelete(assignment._id)} className="btn btn-error btn-sm" style={{ backgroundColor: '#F22480' }}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>

                    {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg p-6 w-80">
                                <h2 className="text-lg font-bold mb-4">{currentAssignment ? "Edit Assignment" : "New Assignment"}</h2>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={assignment.title}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Deadline</label>
                                    <input
                                        type="date"
                                        name="deadline"
                                        value={assignment.deadline}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Description</label>
                                    <textarea
                                        name="description"
                                        value={assignment.description}
                                        onChange={handleInputChange}
                                        className="textarea textarea-bordered w-full"
                                        placeholder="Enter description"
                                    />
                                </div>
                                <div className="flex justify-end space-x-3">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="btn btn-ghost"
                                    >
                                        Cancel
                                    </button>
                                    <button onClick={handleSaveAssignment} className="btn btn-primary" style={{ backgroundColor: '#592ADF' }}>
                                        {currentAssignment ? "Update" : "Add"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyClassDetails;
