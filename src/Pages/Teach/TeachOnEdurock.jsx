import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import useAxiousSecure from '../Hooks/useAxiousSecure';
import teacherIcon from "../../assets/teacher.png";
import { useNavigate } from 'react-router-dom';

const TeachOnEdurock = () => {
    const axiosSecure = useAxiousSecure();
    const { user } = useContext(AuthContext);
    const queryClient = useQueryClient();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        
        const status = 'pending';
        const { experience, category, title } = data;
        const { displayName, email, photoURL } = user;
        const teacherInfo = { displayName, photoURL, email, experience, title, category, status };

        axiosSecure.post("/teacher", teacherInfo)
            .then(res => {
                if (res.data?.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Application Submitted!',
                        text: 'Your teaching application is under review.',
                        confirmButtonColor: '#592ADF',
                    });
                    queryClient.invalidateQueries(['teachers']); 
                    navigate("/");
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission Failed!',
                        text: 'Please try again later.',
                        confirmButtonColor: '#F22480',
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    confirmButtonColor: '#F22480',
                });
            });
    };

    return (
        <div className="max-w-7xl mx-auto max-sm:max-w-lg p-6">
            <div className="text-center mb-12 sm:mb-16">
                <div>
                    <img
                        src={teacherIcon}
                        alt="logo"
                        className="w-48 inline-block"
                    />
                </div>
                <h4 className="sm:text-4xl text-2xl font-bold text-center mb-6 mt-10 text-[#592ADF]">
                    Apply for Teaching Position
                </h4>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Name</label>
                        <input
                            name="name"
                            defaultValue={user?.displayName || ''}
                            disabled
                            type="text"
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#592ADF] transition-all"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Profile Image</label>
                        <input
                            type="text"
                            name="image"
                            disabled
                            defaultValue={user?.photoURL || ''}
                            accept="image/*"
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#592ADF] transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Email</label>
                        <input
                            name="email"
                            type="email"
                            disabled
                            value={user?.email || ''}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#592ADF] transition-all"
                            placeholder="Enter email"
                            readOnly
                        />
                    </div>

                    {/* Experience Level */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Experience Level</label>
                        <select
                            name="experience"
                            {...register("experience", { required: true })}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#592ADF] transition-all"
                        >
                            <option value="">Select Experience</option>
                            <option value="beginner">Beginner</option>
                            <option value="mid_level">Mid-Level</option>
                            <option value="experienced">Experienced</option>
                        </select>
                        {errors.experience && <span className="text-red-600 text-xs block mb-2">Experience Level is required</span>}
                    </div>

                    {/* Title */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Title</label>
                        <input
                            name="title"
                            {...register("title", { required: true })}
                            type="text"
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#592ADF] transition-all"
                            placeholder="Enter title"
                        />
                        {errors.title && <span className="text-red-600 text-xs block mb-2">Title is required</span>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Category</label>
                        <select
                            name="category"
                            {...register("category", { required: true })}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-[#592ADF] transition-all"
                        >
                            <option value="">Select Category</option>
                            <option value="programming">Programming</option>
                            <option value="web_development">Web Development</option>
                            <option value="digital_marketing">Digital Marketing</option>
                            <option value="graphic_design">Graphic Design</option>
                            <option value="machine_learning">Machine Learning</option>
                            <option value="cybersecurity">Cybersecurity</option>
                            <option value="business">Business</option>
                            <option value="photography">Photography</option>
                            <option value="writing">Writing</option>
                            <option value="data_science">Data Science</option>
                            <option value="mobile_development">Mobile Development</option>
                            <option value="cloud_computing">Cloud Computing</option>
                            <option value="design">Design</option>
                            <option value="music">Music</option>
                            <option value="finance">Finance</option>
                        </select>
                        {errors.category && <span className="text-red-600 text-xs block mb-2">Category is required</span>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-[#FFBB01] hover:bg-[#592ADF] focus:outline-none"
                    >
                        Submit for Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeachOnEdurock;
