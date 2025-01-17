import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiousSecure from '../../Hooks/useAxiousSecure';

const AddClass = () => {
    const axiosSecure = useAxiousSecure()
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const status = 'pending';
        const { title, price, description, image } = data;
        const { displayName, email } = user;

        // Structuring the data to match the required format
        const classInfo = {
            title,
            teacher: {
                name: displayName,
                email: email,
            },
            image,
            price: { "$numberInt": price }, // Convert price to the required format
            description,
            status,
            totalEnrollment: { "$numberInt": "0" }, // Default enrollment is 0, or can be set based on your requirements
            category: "General" // You can modify this based on the class category you are adding
        };

        // Sending the data to the backend
        axiosSecure.post("/class", classInfo)
            .then(res => {
                console.log(res.data);
            });
    };

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                        </nav>

                        <section className="main-content w-full overflow-auto p-6">
                            <div className="overflow-x-auto">
                                <div className="max-w-7xl mx-auto max-sm:max-w-lg p-6">
                                    <div className="text-center mb-12 sm:mb-16">
                                        <div>
                                            <img
                                                src="https://readymadeui.com/readymadeui.svg"
                                                alt="logo"
                                                className="w-48 inline-block"
                                            />
                                        </div>
                                        <h4 className="text-gray-600 text-base mt-6">Add a New Class</h4>
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
                                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                                                    placeholder="Enter your name"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="text-gray-600 text-sm mb-2 block">Email</label>
                                                <input
                                                    name="email"
                                                    defaultValue={user?.email || ''}
                                                    disabled
                                                    type="email"
                                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                                                    placeholder="Enter email"
                                                    readOnly
                                                />
                                            </div>

                                            {/* Title */}
                                            <div>
                                                <label className="text-gray-600 text-sm mb-2 block">Class Title</label>
                                                <input
                                                    name="title"
                                                    {...register("title", { required: true })}
                                                    type="text"
                                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                                                    placeholder="Enter class title"
                                                />
                                                {errors.title && <span className="text-red-600 text-xs block mb-2">Class Title is required</span>}
                                            </div>

                                            {/* Price */}
                                            <div>
                                                <label className="text-gray-600 text-sm mb-2 block">Price</label>
                                                <input
                                                    name="price"
                                                    {...register("price", { required: true })}
                                                    type="number"
                                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                                                    placeholder="Enter class price"
                                                />
                                                {errors.price && <span className="text-red-600 text-xs block mb-2">Price is required</span>}
                                            </div>

                                            {/* Description */}
                                            <div>
                                                <label className="text-gray-600 text-sm mb-2 block">Class Description</label>
                                                <textarea
                                                    name="description"
                                                    {...register("description", { required: true })}
                                                    rows="4"
                                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                                                    placeholder="Enter class description"
                                                />
                                                {errors.description && <span className="text-red-600 text-xs block mb-2">Description is required</span>}
                                            </div>

                                            {/* Image */}
                                            <div>
                                                <label className="text-gray-600 text-sm mb-2 block">Class Image</label>
                                                <input
                                                    name="image"
                                                    {...register("image", { required: true })}
                                                    type="text"
                                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all"
                                                    placeholder="Enter image URL"
                                                />
                                                {errors.image && <span className="text-red-600 text-xs block mb-2">Image is required</span>}
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="mt-8">
                                            <button
                                                type="submit"
                                                className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                            >
                                                Add Class
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddClass;
