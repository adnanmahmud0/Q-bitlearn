import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => console.log(error))
    }
    const link =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Classes">All Classes</Link></li>
            <li><a>Teach on edurock</a></li>
        </>

    return (
        <div className="bg-base-100">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {link}
                            </ul>
                        </div>
                        <img src={logo} alt="" className="w-6" />
                        <a className="text-xl">edurock</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {link}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-5">
                        {
                            user ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src={user.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li>
                                                <p className="bg-base-300">
                                                    {user.displayName}
                                                </p>
                                            </li>
                                            <li><a>Dashboard</a></li>
                                            <li><a onClick={handleLogOut}>Logout</a></li>
                                        </ul>
                                    </div>
                                </> : <>
                                    <Link to="/Login" className="btn">Login</Link>
                                    <Link to="/Register" className="btn">Register</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;