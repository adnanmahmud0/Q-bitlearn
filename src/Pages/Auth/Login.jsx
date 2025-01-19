import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true});
            });
    }

    const googleSignIn = () =>{
        signInWithGoogle()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            const userInfo = {
                name: loggedUser.displayName,
                email: loggedUser.email,
                image: loggedUser.photoURL,
                role: "User",
            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                if(res.data.insertedId){
                    console.log('user added to the database');
                    navigate('/');
                }
            })
            navigate(from, { replace: true});
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
                                    <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                                    <p className="text-sm mt-4 text-gray-800">
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
                                    <label className="text-gray-800 text-xs block mb-2">Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="email"
                                            type="text"
                                            {...register("email", { required: true })}
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                                            placeholder="Enter email"
                                        />
                                        <FaEnvelope className="w-[18px] h-[18px] absolute right-2 text-gray-400" />
                                    </div>
                                    {errors.email && <span className="text-red-600 text-xs block mb-2">Email is required</span>}
                                </div>

                                <div className="mt-8">
                                    <label className="text-gray-800 text-xs block mb-2">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="password"
                                            type="password"
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })}
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                                            placeholder="Enter password"
                                        />
                                        <FaEyeSlash className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-gray-400" />
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
                                        className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                    >
                                        Sign in
                                    </button>
                                </div>

                                <div className="my-4 flex items-center gap-4">
                                    <hr className="w-full border-gray-300" />
                                    <p className="text-sm text-gray-800 text-center">or</p>
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
                        <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
                            <img
                                src="https://readymadeui.com/signin-image.webp"
                                className="w-full aspect-[12/12] object-contain"
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
