import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ThemeChanger } from "daisyui";
import Swal from 'sweetalert2'; // Import SweetAlert2


const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        // SweetAlert2 confirmation before logout
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to log out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F1257F', // Red color for confirmation
            cancelButtonColor: '#FFBB01', // Yellow color for cancel
            confirmButtonText: 'Yes, log out!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire(
                            'Logged Out!',
                            'You have been logged out successfully.',
                            'success'
                        );
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'Something went wrong. Please try again.',
                            'error'
                        );
                    });
            }
        });
    };

    const link = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Classes">All Classes</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
        </>
    );

    return (
        <div className="bg-base-100 fixed w-full z-50 shadow-lg transition-all duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50 font-semibold">
                                {link}
                            </ul>
                        </div>
                        <Link to="/" className="flex justify-center items-center">
                            <img src={logo} alt="" className="w-6" />
                            <p className="md:text-xl text-sm font-extrabold ml-1"><span className="text-[#F1257F]">Q-bit</span><span className="text-[#FFBB01]">learn</span></p>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {link}
                        </ul>
                    </div>

                    <div className="navbar-end space-x-5">
                        <input
                            type="checkbox"
                            onChange={toggleTheme}
                            checked={theme === "dark"}
                            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-[#592ADF] bg-[#FFBB01] checked:border-[#FFBB01] checked:bg-[#592ADF]"
                        />
                        {user ? (
                            <div className="dropdown dropdown-end">
                                {/* Profile Picture Button */}
                                <button
                                    tabIndex={0}
                                    role="button"
                                    aria-label="User Menu"
                                    className="btn btn-circle avatar border border-[#FFBB01]"
                                >
                                    <div className="w-10 rounded-full border-2 border-[#F1257F]">
                                        <img
                                            alt={`${user.displayName}'s Profile`}
                                            src={user.photoURL || '/default-profile.png'} // Fallback for missing photoURL
                                        />
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-[#592ADF] text-white rounded-box z-50 mt-3 w-52 p-2 font-semibold shadow-lg"
                                >
                                    <li>
                                        <p className="bg-[#FFBB01] cursor-default text-center rounded py-2">
                                            {user.displayName || 'Anonymous User'}
                                        </p>
                                    </li>
                                    <li className=""><Link className="hover:bg-[#F1257F] hover:text-white rounded px-3 py-2 transition-colors" to="/Teach-On-Edurock">Teach on Q-bitlearn</Link></li>
                                    <li>
                                        <Link
                                            to="/Dashboard"
                                            className="hover:bg-[#F1257F] hover:text-white rounded px-3 py-2 transition-colors"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="hover:bg-[#FFBB01] hover:text-black rounded px-3 py-2 transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/Login"
                                    className="btn bg-[#592ADF] text-white hover:bg-[#F1257F] border-none rounded px-4 py-2 transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/Register"
                                    className="btn bg-[#FFBB01] text-black hover:bg-[#F1257F] hover:text-white border-none rounded px-4 py-2 transition-colors"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
