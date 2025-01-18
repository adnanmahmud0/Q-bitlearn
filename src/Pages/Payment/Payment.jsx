import { useContext } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiousSecure from '../Hooks/useAxiousSecure';

const Payment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiousSecure();
    const { data } = useQuery({
        queryKey: ["pay", id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/class/${id}`);
            return data;
        },
    });

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        const { username, card_number, exp, cvv } = formData;
        const { email } = user;
        const paymentInfo = { username, card_number, exp, cvv, email, classId: id };
        console.log(paymentInfo);
        axiosSecure.post('/payment', paymentInfo);
        axiosSecure.patch(`/class/${id}`);
    };

    return (
        <div className="bg-white p-4">
            <div className="md:max-w-5xl max-w-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 max-md:order-1">
                        <h2 className="text-3xl font-extrabold text-gray-800">Make a payment</h2>
                        <p className="text-gray-800 text-sm mt-4">
                            Complete your transaction swiftly and securely with our easy-to-use payment process.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg">
                            <div className="grid gap-6">
                                {/* Cardholder Name */}
                                <div>
                                    <label className="block text-gray-800 font-medium mb-2">
                                        Cardholder's Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("username", { required: "Cardholder's name is required" })}
                                        type="text"
                                        placeholder="Enter full name as on the card"
                                        className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                                    />
                                    {errors.username && <span className="text-red-600 text-xs block mt-1">{errors.username.message}</span>}
                                </div>

                                {/* Card Number */}
                                <div>
                                    <label className="block text-gray-800 font-medium mb-2">
                                        Card Number <span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
                                        <FaCreditCard className="w-6 ml-3 mt-4 text-gray-800" />
                                        <input
                                            {...register("card_number", {
                                                required: "Card number is required",
                                                pattern: {
                                                    value: /^\d{16}$/,
                                                    message: "Card number must be 16 digits",
                                                },
                                            })}
                                            type="text"
                                            placeholder="1234 5678 1234 5678"
                                            maxLength="16"
                                            className="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent"
                                        />
                                    </div>
                                    {errors.card_number && <span className="text-red-600 text-xs block mt-1">{errors.card_number.message}</span>}
                                </div>

                                {/* Expiration Date and CVV */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Expiration Date */}
                                    <div>
                                        <label className="block text-gray-800 font-medium mb-2">
                                            Expiration Date (MM/YY) <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            {...register("exp", {
                                                required: "Expiration date is required",
                                                pattern: {
                                                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                                                    message: "Use MM/YY format (e.g., 03/25)",
                                                },
                                            })}
                                            type="text"
                                            placeholder="MM/YY"
                                            className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                                        />
                                        {errors.exp && <span className="text-red-600 text-xs block mt-1">{errors.exp.message}</span>}
                                    </div>

                                    {/* CVV */}
                                    <div>
                                        <label className="block text-gray-800 font-medium mb-2">
                                            CVV <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            {...register("cvv", {
                                                required: "CVV is required",
                                                pattern: {
                                                    value: /^\d{3}$/,
                                                    message: "CVV must be 3 digits",
                                                },
                                            })}
                                            type="text"
                                            placeholder="123"
                                            maxLength="3"
                                            className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                                        />
                                        {errors.cvv && <span className="text-red-600 text-xs block mt-1">{errors.cvv.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
                            >
                                Pay
                            </button>
                        </form>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md">
                        <h2 className="text-3xl font-bold text-gray-800">৳{data?.price}</h2>

                        <ul className="text-gray-800 mt-8 space-y-3">
                            <li className="flex flex-wrap gap-4 text-sm">
                                Course Amount <span className="ml-auto font-bold">৳{data?.price}</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Advisor Amount <span className="ml-auto font-bold">৳0.00</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Tax <span className="ml-auto font-bold">৳0.00</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                                Total <span className="ml-auto">৳{data?.price}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
