import React from 'react';
import { MdAssignment } from "react-icons/md";
const EnrollClassDetails = () => {
    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                        </nav>

                        <section className="main-content w-full overflow-auto p-6">
                            <div className='flex justify-between'>
                                <button className="btn">+ Teaching Evaluation Report </button>
                                <button className="btn">Button</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Title & Description</th>
                                            <th>Deadline</th>
                                            <th>Status</th>
                                            <th>Your Assignment Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <MdAssignment className='size-8' />
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>12-05-2025</p>
                                            </td>
                                            <td>
                                                <p>Not Submited</p>
                                            </td>
                                            <td>
                                                <form>
                                                    <input
                                                        type="text"
                                                        placeholder="Type here"
                                                        className="input input-bordered input-sm w-full max-w-xs" />
                                                    <button className="btn btn-sm ml-5">Small</button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnrollClassDetails;