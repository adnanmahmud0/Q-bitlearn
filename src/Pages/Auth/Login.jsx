import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import loginimage from "../../assets/login.jpg"

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [passwordVisible, setPasswordVisible] = useState(false);  // State to manage password visibility

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid credentials. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    background: '#592ADF',
                    color: '#FFBB01',
                    confirmButtonColor: '#F22480',
                });
            });
    }

    const googleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                const userInfo = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    image: loggedUser.photoURL,
                    role: "User",
                };

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/');
                            Swal.fire({
                                icon: 'success',
                                title: 'Login Successful!',
                                text: 'You have been login successfully!',
                            });
                            
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Something went wrong while creating the user.',
                            icon: 'error',
                            confirmButtonText: 'OK',
                            background: '#592ADF',
                            color: '#FFBB01',
                            confirmButtonColor: '#F22480',
                        });
                    });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Google sign-in failed. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    background: '#592ADF',
                    color: '#FFBB01',
                    confirmButtonColor: '#F22480',
                });
            });
    }

    return (
        <>
            <Helmet>
                <title>edurock | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="max-sm:px-4">
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                        {/* Sign-in Form */}
                        <div className="md:max-w-md w-full px-4 py-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-12">
                                    <h3 className=" text-3xl font-extrabold">Sign in</h3>
                                    <p className="text-sm mt-4 ">
                                        Don't have an account?{" "}
                                        <Link
                                            to="/Register"
                                            className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                        >
                                            Register here
                                        </Link>
                                    </p>
                                </div>

                                <div>
                                    <label className=" text-xs block mb-2">Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="email"
                                            type="text"
                                            {...register("email", { required: true })}
                                            className="w-full  text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                                            placeholder="Enter email"
                                        />
                                        <FaEnvelope className="w-[18px] h-[18px] absolute right-2 text-gray-400" />
                                    </div>
                                    {errors.email && <span className="text-red-600 text-xs block mb-2">Email is required</span>}
                                </div>

                                <div className="mt-8">
                                    <label className=" text-xs block mb-2">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="password"
                                            type={passwordVisible ? "text" : "password"}  // Toggle between text and password
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })}
                                            className="w-full  text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                                            placeholder="Enter password"
                                        />
                                        <div
                                            onClick={() => setPasswordVisible(prev => !prev)}  // Toggle the visibility
                                            className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-gray-400"
                                        >
                                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                        </div>
                                    </div>
                                    {errors.password?.type === 'required' && <p className="text-red-600 text-xs block mb-2">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600 text-xs block mb-2">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600 text-xs block mb-2">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600 text-xs block mb-2">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                    <div>
                                        <Link
                                            to="/Forget-Password"
                                            className="text-blue-600 font-semibold text-sm hover:underline"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button
                                        type="submit"
                                        className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-[#592ADF] hover:bg-[#FFBB01] focus:outline-none"
                                    >
                                        Sign in
                                    </button>
                                </div>

                                <div className="my-4 flex items-center gap-4">
                                    <hr className="w-full border-gray-300" />
                                    <p className="text-sm  text-center">or</p>
                                    <hr className="w-full border-gray-300" />
                                </div>

                                <div className="space-x-6 flex justify-center">
                                    <button onClick={googleSignIn} type="button" className="border-none outline-none">
                                        <FcGoogle className="w-7 h-7 inline" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="p-2 bg-slate-100 rounded-2xl">
                            <img
                                src={loginimage}
                                className="w-full h-full object-cover rounded-xl"
                                alt="login"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
