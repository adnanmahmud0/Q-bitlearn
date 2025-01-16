import { FcApprove, FcDisapprove } from "react-icons/fc";



const TeacherRequest = () => {
    
    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
                        </nav>

                        <section className="main-content w-full overflow-auto p-6">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>User & Experience</th>
                                            <th>Title & Category</th>
                                            <th>status</th>
                                            <th>Option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>Purple</td>
                                            <th>
                                                <div>
                                                    <button className="btn btn-ghost"><FcApprove className="size-7" /></button>
                                                    <button className="btn btn-ghost"><FcDisapprove className="size-7" /></button>
                                                </div>
                                            </th>
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

export default TeacherRequest;