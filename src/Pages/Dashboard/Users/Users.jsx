import { useQuery, useMutation } from "@tanstack/react-query";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const axiosSecure = useAxiousSecure();
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;

    // Fetch users
    const { data, error, refetch } = useQuery({
        queryKey: ["users", search, currentPage],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users?search=${search}&page=${currentPage}&limit=${limit}`);
            return data;
        },
    });

    // Mutation to update user role
    const makeAdminMutation = useMutation({
        mutationFn: async (userId) => {
            await axiosSecure.put(`/users/${userId}`, { role: "Admin" });
        },
        onSuccess: () => {
            refetch(); // Refetch users after update
            Swal.fire({
                icon: 'success',
                title: 'User role updated!',
                text: 'The user has been successfully made an Admin.',
                confirmButtonColor: '#FFBB01',
            });
        },
        onError: () => {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Something went wrong while updating the user role.',
                confirmButtonColor: '#F22480',
            });
        },
    });

    if (error) {
        return <div>Error fetching users.</div>;
    }

    const handleMakeAdmin = (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to make this user an Admin!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#592ADF',
            cancelButtonColor: '#F22480',
            confirmButtonText: 'Yes, make Admin!',
        }).then((result) => {
            if (result.isConfirmed) {
                makeAdminMutation.mutate(userId);
            }
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex justify-end mr-5">
                        <input
                            className="input input-bordered w-full max-w-xs mt-5 py-3 px-4 rounded-lg shadow-md focus:ring-2 focus:ring-[#592ADF] focus:border-[#592ADF] transition-all duration-200 ease-in-out"
                            type="text"
                            name="search"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for users"
                            aria-label="Search for users"
                        />
                    </div>
                    <div className="flex items-start">
                        <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8"></nav>
                        <section className="main-content w-full overflow-auto p-6">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Access</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.isArray(data?.users) && data?.users.length > 0 ? (
                                            data?.users.map((user) => (
                                                <tr key={user?._id}>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src={user?.image}
                                                                        alt="User Avatar"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{user?.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-ghost badge-sm">
                                                            {user?.email}
                                                        </span>
                                                    </td>
                                                    <th>
                                                        <button
                                                            onClick={() => handleMakeAdmin(user._id)}
                                                            className="btn py-2 px-4 rounded-lg text-white transition-all duration-200 ease-in-out 
                                                            hover:bg-[#FFBB01] disabled:bg-gray-300"
                                                            style={{
                                                                backgroundColor: user.role === "Admin" ? '#FFBB01' : '#592ADF',
                                                                color: user.role === "Admin" ? '#000' : '#fff',
                                                            }}
                                                            disabled={user.role === "Admin"}
                                                        >
                                                            {user.role === "Admin" ? "Admin" : "Make Admin"}
                                                        </button>
                                                    </th>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center">
                                                    No users found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <ul className="flex mx-auto border-2 divide-x-2 rounded-lg overflow-hidden w-max font-[sans-serif]">
                                <li
                                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                    className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 mr-2" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        />
                                    </svg>
                                    Previous
                                </li>
                                {Array.from({ length: data?.totalPages }, (_, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-base font-bold ${
                                            data?.currentPage === index + 1 ? "!bg-gray-100 text-gray-800" : "text-gray-500"
                                        }`}
                                    >
                                        {index + 1}
                                    </li>
                                ))}
                                <li
                                    onClick={() => currentPage < data?.totalPages && handlePageChange(currentPage + 1)}
                                    className="flex items-center justify-center shrink-0 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-800 ml-2 rotate-180" viewBox="0 0 55.753 55.753">
                                        <path
                                            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        />
                                    </svg>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
