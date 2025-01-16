import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiousSecure from "../../Hooks/useAxiousSecure";

const Users = () => {
    const axiosSecure = useAxiousSecure();
    const queryClient = useQueryClient();

    // Fetch users
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users`);
            return data;
        },
    });

    // Mutation to update user role
    const makeAdminMutation = useMutation({
        mutationFn: async (userId) => {
            await axiosSecure.put(`/users/${userId}`, { role: 1 });
        },
        onSuccess: () => {
            refetch(); // Refetch users after update
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching users.</div>;
    }

    const handleMakeAdmin = (userId) => {
        makeAdminMutation.mutate(userId);
    };

    return (
        <>
            <div className="relative pt-[70px] h-screen">
                <div>
                    <div className="flex justify-end mr-5">
                        <input
                            type="text"
                            placeholder="Search with email"
                            className="input input-bordered w-full max-w-xs mt-5"
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
                                        {Array.isArray(data) && data.length > 0 ? (
                                            data.map((user) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src={user.image}
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
                                                            className="btn"
                                                            disabled={user.role === 1}
                                                        >
                                                            {user.role === 1 ? "Admin" : "Make Admin"}
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
                                    {/* foot */}
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
