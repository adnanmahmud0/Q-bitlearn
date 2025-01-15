import { useContext, useEffect, useState } from 'react';
import { FaCreditCard } from 'react-icons/fa'; // For the credit card icon
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useTrans from '../Hooks/useTrans';

const Payment = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/class/${id}`);
    //             setData(response.data);  // Store the actual data
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [id]);

    // const { data, isLoading, refetch } = useQuery({
    //     queryKey: ["pay", id],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`http://localhost:5000/class/${id}`);
    //         return data;
    //     }
    // })
    const [data, isLoading, refetch] = useTrans()

    console.log(data);

    // if (isLoading) return <p>loading.........</p>

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const { username, card_number, exp, cvv } = data;
        const { email } = user;
        const paymentInfo = { username, card_number, exp, cvv, email, classId };

    }

    return (
        <div className="bg-white p-4">
            <div className="md:max-w-5xl max-w-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 max-md:order-1">
                        <h2 className="text-3xl font-extrabold text-gray-800">Make a payment</h2>
                        <p className="text-gray-800 text-sm mt-4">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg">
                            <div className="grid gap-4">
                                <div>
                                    <input
                                        {...register("username", { required: true })}
                                        type="text"
                                        placeholder="Cardholder's Name"
                                        className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                                    />
                                    {errors.name && <span className="text-red-600 text-xs block mb-2">Valid name is required</span>}
                                </div>
                                <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
                                    <FaCreditCard className="w-6 ml-3 mt-4 text-gray-800" />
                                    <input
                                        {...register("card_number", { required: true })}
                                        type="number"
                                        placeholder="Card Number"
                                        className="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent"
                                    />

                                </div>
                                {errors.name && <span className="text-red-600 text-xs block mb-2">Valid card number is required</span>}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            {...register("exp", { required: true })}
                                            type="number"
                                            placeholder="EXP."
                                            className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                                        />
                                        {errors.name && <span className="text-red-600 text-xs block mb-2">Valid EXP is required</span>}
                                    </div>
                                    <div>
                                        <input
                                            {...register("cvv", { required: true })}
                                            type="number"
                                            placeholder="CVV"
                                            className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                                        />
                                        {errors.name && <span className="text-red-600 text-xs block mb-2">Valid CVV is required</span>}
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
                        <h2 className="text-3xl font-bold text-gray-800">$250.00</h2>

                        <ul className="text-gray-800 mt-8 space-y-3">
                            <li className="flex flex-wrap gap-4 text-sm">
                                Split Sneakers <span className="ml-auto font-bold">$250.00</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Echo Elegance <span className="ml-auto font-bold">$0.00</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm">
                                Tax <span className="ml-auto font-bold">$0.00</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                                Total <span className="ml-auto">$250.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
