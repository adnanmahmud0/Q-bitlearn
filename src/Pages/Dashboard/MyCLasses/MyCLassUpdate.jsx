import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const MyClassUpdate = () => {
    const { id } = useParams();
    const axiosSecure = useAxiousSecure();
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState("");

    // Query to fetch existing class data
    const { data, isLoading, error } = useQuery({
        queryKey: ["class", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/class/${id}`);
            return data;
        },
    });

    // Using react-hook-form for form handling
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Populate form with data if available
    useEffect(() => {
        if (data) {
            setValue("title", data.title);
            setValue("price", data.price);
            setValue("description", data.description);
            setImagePreview(data.image);  // Set the current image for preview
        }
    }, [data, setValue]);

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));  // Show preview of the selected image
        }
    };

    // Form submission handler
    const onSubmit = async (formData) => {
        try {
            const updatedClassData = {
                ...formData,
                // If an image is selected, add it to the form data
                image: imagePreview, // You may want to upload this image file separately
            };

            // Sending the updated data to the backend
            const response = await axiosSecure.put(`/class/${id}`, updatedClassData);
            console.log("Class updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating class:", error);
        }
    };

    // Show loading state
    if (isLoading) return <div>Loading...</div>;

    // Handle error state
    if (error) return <div>Error loading class data</div>;

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                        </nav>

                        <section className="main-content w-full overflow-auto p-6">
                            <div className="relative pt-[70px] h-screen">
                                <div>
                                    <div className="flex items-start">
                                        <section className="main-content w-full overflow-auto p-6">
                                            <div className="max-w-7xl mx-auto p-6">
                                                <div className="text-center mb-12">
                                                    <h4 className="text-gray-600 text-base mt-6">Update Class</h4>
                                                </div>

                                                {/* Form for updating class */}
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="grid sm:grid-cols-2 gap-6">
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
                                                                {...register("image")}
                                                                type="file"
                                                                accept="image/*"
                                                                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none file:cursor-pointer file:border-0 file:bg-transparent file:text-gray-800 file:mr-4"
                                                                onChange={handleFileChange}
                                                            />
                                                            {errors.image && <span className="text-red-600 text-xs block mb-2">Image is required</span>}

                                                            {/* Show preview of the current image */}
                                                            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-32 h-32 object-cover" />}
                                                        </div>
                                                    </div>

                                                    {/* Submit Button */}
                                                    <div className="mt-8">
                                                        <button
                                                            type="submit"
                                                            className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                                        >
                                                            Update Class
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyClassUpdate;
