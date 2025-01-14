import { FaUser, FaEnvelope, FaEyeSlash, FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser} = useContext(AuthContext);
    const onSubmit = data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then (res => {
            const loggedUser = res.user;
            console.log(loggedUser);
        })
    } 
    return (
        <div className=" bg-white md:h-screen">
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
                            <h3 className="text-blue-500 text-2xl font-bold max-md:text-center">
                                Create an account
                            </h3>
                        </div>

                        <div>
                            <label className="text-gray-800 text-xs block mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <input
                                    name="name"
                                    {...register("name", { required: true })}
                                    type="text"
                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter name"
                                />
                                <FaUser className="w-[18px] h-[18px] absolute right-2 text-gray-400" />
                            </div>
                            {errors.name && <span className="text-red-600 text-xs block mb-2">Name is required</span>}
                        </div>

                        <div className="mt-6">
                            <label className="text-gray-800 text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input
                                    name="email"
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter email"
                                />
                                <FaEnvelope className="w-[18px] h-[18px] absolute right-2 text-gray-400" />
                            </div>
                            {errors.email && <span className="text-red-600 text-xs block mb-2">Email is required</span>}
                        </div>
                        <div className="mt-6">
                            <label className="text-gray-800 text-xs block mb-2">Profile Picture</label>
                            <div className="relative flex items-center">
                                <input
                                    name="image"
                                    {...register("image", { required: true })}
                                    type="file"
                                    accept="image/*"
                                    id="profile-picture"
                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none file:cursor-pointer file:border-0 file:bg-transparent file:text-gray-800 file:mr-4"
                                />
                                <FaImage className="w-[18px] h-[18px] absolute right-2 text-gray-400" />
                            </div>
                            {errors.image && <span className="text-red-600 text-xs block mb-2">Photo URL is required</span>}
                        </div>
                        <div className="mt-6">
                            <label className="text-gray-800 text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    type="password"
                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter password"
                                />
                                <FaEyeSlash className="w-[18px] h-[18px] absolute right-2 text-gray-400 cursor-pointer" />
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600 text-xs block mb-2">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600 text-xs block mb-2">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600 text-xs block mb-2">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600 text-xs block mb-2">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full py-2.5 px-4 text-sm tracking-wider rounded bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
                            >
                                Create an account
                            </button>
                            <p className="text-sm mt-6 text-gray-800">
                                Already have an account?{" "}
                                <Link to="Login"

                                    className="text-blue-500 font-semibold hover:underline ml-1"
                                >
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
