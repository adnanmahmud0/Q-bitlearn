import { useQuery, useMutation } from "@tanstack/react-query";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const axiosSecure = useAxiousSecure();
    const [search, setSearch] = useState("");

    // Fetch users
    const { data: users, error, refetch } = useQuery({
        queryKey: ["users", search],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users?search=${search}`);
            console.log(data);
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
                                        {Array.isArray(users) && users.length > 0 ? (
                                            users.map((user) => (
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
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Users;
