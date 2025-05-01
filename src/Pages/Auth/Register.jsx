import { useState } from "react";
import { FaUser, FaEnvelope, FaEyeSlash, FaEye, FaImage } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from 'sweetalert2';  // Import SweetAlert2

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);  // State for password visibility
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const onSubmit = async (data) => {
        try {
            const res = await createUser(data.email, data.password);
            const imageFile = new FormData();
            imageFile.append('image', data.image[0]);
            const imageUploadResponse = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            const imageUrl = imageUploadResponse?.data?.data?.display_url;
            await updateUserProfile(data?.name, imageUrl)
            .then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    image: imageUrl,  // Corrected the URL
                    role: "User",
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        navigate('/');
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Successful!',
                            text: 'You have been registered successfully!',
                        });
                    }
                })
            });
        } catch (error) {
            console.error('Error creating user:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an issue creating your account. Please try again.',
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>edurock | Register</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="bg-white md:h-screen">
                <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                    <div className="max-md:order-1 p-4 bg-gray-50 h-full">
                        <img
                            src="https://readymadeui.com/signin-image.webp"
                            className="max-w-[80%] w-full h-full aspect-square object-contain block mx-auto"
                            alt="login-image"
                        />
                    </div>

                    <div className="flex items-center p-6 h-full w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full mx-auto">
                            <div className="mb-8">
                                <h3 className="text-[#592ADF] text-2xl font-bold max-md:text-center">
                                    Create an account
                                </h3>
                            </div>

                            <div>
                                <label className="text-[#592ADF] text-xs block mb-2">Full Name</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="name"
                                        {...register("name", { required: true })}
                                        type="text"
                                        className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#FFBB01] pl-2 pr-8 py-3 outline-none"
                                        placeholder="Enter name"
                                    />
                                    <FaUser className="w-[18px] h-[18px] absolute right-2 text-[#592ADF]" />
                                </div>
                                {errors.name && <span className="text-red-600 text-xs block mb-2">Name is required</span>}
                            </div>

                            <div className="mt-6">
                                <label className="text-[#592ADF] text-xs block mb-2">Email</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        {...register("email", { required: true })}
                                        type="email"
                                        className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#FFBB01] pl-2 pr-8 py-3 outline-none"
                                        placeholder="Enter email"
                                    />
                                    <FaEnvelope className="w-[18px] h-[18px] absolute right-2 text-[#592ADF]" />
                                </div>
                                {errors.email && <span className="text-red-600 text-xs block mb-2">Email is required</span>}
                            </div>
                            <div className="mt-6">
                                <label className="text-[#592ADF] text-xs block mb-2">Profile Picture</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="image"
                                        {...register("image", { required: true })}
                                        type="file"
                                        accept="image/*"
                                        id="profile-picture"
                                        className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#FFBB01] pl-2 pr-8 py-3 outline-none file:cursor-pointer file:border-0 file:bg-transparent file: file:mr-4"
                                    />
                                    <FaImage className="w-[18px] h-[18px] absolute right-2 text-[#592ADF]" />
                                </div>
                                {errors.image && <span className="text-red-600 text-xs block mb-2">Photo URL is required</span>}
                            </div>
                            <div className="mt-6">
                                <label className="text-[#592ADF] text-xs block mb-2">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        type={showPassword ? "text" : "password"}
                                        className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-[#FFBB01] pl-2 pr-8 py-3 outline-none"
                                        placeholder="Enter password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(prev => !prev)}  // Toggle password visibility
                                        className="absolute right-2 text-[#592ADF]"
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                                {errors.password?.type === 'required' && <p className="text-red-600 text-xs block mb-2">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600 text-xs block mb-2">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600 text-xs block mb-2">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 text-xs block mb-2">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full py-2.5 px-4 text-sm tracking-wider rounded bg-[#F22480] hover:bg-[#FFBB01] text-white focus:outline-none"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm mt-6 ">
                                    Already have an account?{" "}
                                    <Link to="/Login"
                                        className="text-[#592ADF] font-semibold hover:underline ml-1"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
