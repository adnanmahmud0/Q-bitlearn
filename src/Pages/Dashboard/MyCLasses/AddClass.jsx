import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiousSecure from '../../Hooks/useAxiousSecure';
import axios from "axios";
const AddClass = () => {
    const axiosSecure = useAxiousSecure()
    const { user } = useContext(AuthContext);
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const status = 'pending';
        const { title, price, description, image } = data;
        const { displayName, email } = user;
        const imageFile = new FormData();
        imageFile.append('image', data.image[0]);

        try {
            // Await the image upload response
            const imageUploadResponse = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });

            // Ensure the image upload response contains the expected data
            const image = imageUploadResponse.data.data.display_url;

            // Structuring the data to match the required format
            const classInfo = {
                title,
                teacher: {
                    name: displayName,
                    email: email,
                },
                image,
                price: price, // Use price directly, not as an object
                description,
                status,
                totalEnrollment: 0, // Default enrollment is 0
            };
            

            // Sending the data to the backend
            const response = await axiosSecure.post("/class", classInfo);
            console.log(response.data);

        } catch (error) {
            console.error('Error during class creation:', error);
        }
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
                                                    type="file"
                                                    accept="image/*"
                                                    id="profile-picture"
                                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none file:cursor-pointer file:border-0 file:bg-transparent file:text-gray-800 file:mr-4"
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
