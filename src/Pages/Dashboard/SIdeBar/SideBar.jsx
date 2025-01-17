import React, { useContext, useEffect } from "react";
import { FiHome, FiUser, FiLogOut, FiBook, FiPlusCircle, FiList, FiDollarSign } from "react-icons/fi";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { MdHouseSiding } from 'react-icons/md'; // Example for the house icon
import { BsFillPersonFill } from 'react-icons/bs'; // Example for profile icon
import { AuthContext } from "../../../Provider/AuthProvider";

const SideBar = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut =() => {
        logOut();
    }
    useEffect(() => {
        // Header toggle functionality
        const toggleOpen = document.getElementById("toggleOpen");
        const toggleClose = document.getElementById("toggleClose");
        const collapseMenu = document.getElementById("collapseMenu");

        const handleHeaderClick = () => {
            if (collapseMenu.style.display === "block") {
                collapseMenu.style.display = "none";
            } else {
                collapseMenu.style.display = "block";
            }
        };

        toggleOpen?.addEventListener("click", handleHeaderClick);
        toggleClose?.addEventListener("click", handleHeaderClick);

        // Sidebar toggle functionality
        const sidebarToggleBtn = document.getElementById("toggle-sidebar");
        const sidebarCollapseMenu = document.getElementById("sidebar-collapse-menu");

        const handleSidebarToggle = () => {
            if (!sidebarCollapseMenu.classList.contains("open")) {
                sidebarCollapseMenu.classList.add("open");
                sidebarCollapseMenu.style.cssText = "width: 250px; visibility: visible; opacity: 1;";
                sidebarToggleBtn.style.cssText = "left: 236px;";
            } else {
                sidebarCollapseMenu.classList.remove("open");
                sidebarCollapseMenu.style.cssText = "width: 32px; visibility: hidden; opacity: 0;";
                sidebarToggleBtn.style.cssText = "left: 10px;";
            }
        };

        sidebarToggleBtn?.addEventListener("click", handleSidebarToggle);

        // Cleanup event listeners on unmount
        return () => {
            toggleOpen?.removeEventListener("click", handleHeaderClick);
            toggleClose?.removeEventListener("click", handleHeaderClick);
            sidebarToggleBtn?.removeEventListener("click", handleSidebarToggle);
        };
    }, []);
    return (
        <>
            <header className='flex shadow-md py-1 px-4 sm:px-7 bg-white min-h-[70px] tracking-wide z-[110] fixed top-0 w-full'>
                <div className='flex flex-wrap items-center justify-between gap-4 w-full relative'>
                    <a className='flex items-center'>
                        <img src={logo} alt="logo" className='w-10' />
                        <p className='ml-2 text-xl'>edurock</p>
                    </a>

                    <div id="collapseMenu"
                        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <FaTimes className="w-5 h-5 text-black" />
                        </button>

                        <div
                            className="max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <div className='flex items-center max-lg:flex-col-reverse max-lg:ml-auto gap-8'>
                                <div className='flex items-center space-x-6 max-lg:flex-wrap'>
                                    <MdHouseSiding className="w-5 h-5 cursor-pointer text-[#333] hover:text-[#077bff]" />
                                </div>

                                <div className="dropdown-menu relative flex shrink-0 group">
                                    <img src="https://readymadeui.com/team-1.webp" alt="profile-pic"
                                        className="w-9 h-9 max-lg:w-16 max-lg:h-16 rounded-full border-2 border-gray-300 cursor-pointer" />

                                    <div
                                        className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                                        <div className="w-full">
                                            <a
                                                className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                                                <FaHome className="w-4 h-4 mr-3" />
                                                Home</a>
                                            <a onClick={handleLogOut}
                                                className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                                                <FaSignOutAlt className="w-4 h-4 mr-3" />
                                                Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="toggleOpen" className='lg:hidden !ml-7 outline-none'>
                        <FaBars className="w-7 h-7 text-black" />
                    </button>
                </div>
            </header>

            <div id="sidebar-collapse-menu" 
                className="h-calc(100vh - 72px) bg-white shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500">
                <ul className="space-y-2">
                    <li>
                        <a
                            className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                            <FiHome className="mr-2" /> {/* React Icon */}
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>

                <div className="mt-6">
                    <h6 className="text-blue-600 text-sm font-bold px-4">Information</h6>
                    <ul className="mt-3 space-y-2">
                        <li>
                            <Link to="/Dashboard/TeacherRequest"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiUser className="mr-2" /> {/* React Icon */}
                                <span>Teacher Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Dashboard/users'
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiUser className="mr-2" /> {/* React Icon */}
                                <span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/AllClasses"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiList className="mr-2" /> {/* React Icon */}
                                <span>All Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/AddClass"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiPlusCircle className="mr-2" /> {/* React Icon */}
                                <span>Add Class</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/MyClasses"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiBook className="mr-2" /> {/* React Icon */}
                                <span>My Classes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/My-enroll-class"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiBook className="mr-2" /> {/* React Icon */}
                                <span>My Enrolled Classes</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h6 className="text-blue-600 text-sm font-bold px-4">Payment</h6>
                    <ul className="mt-3 space-y-2">
                        <li>
                            <a
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiDollarSign className="mr-2" /> {/* React Icon */}
                                <span>History</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h6 className="text-blue-600 text-sm font-bold px-4">Actions</h6>
                    <ul className="mt-3 space-y-2">
                        <li>
                            <Link to="/Dashboard/My-Profile"
                                className="text-gray-800 text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiUser className="mr-2" /> {/* React Icon */}
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <a onClick={handleLogOut}
                                className="text-gray-800 text-sm flex items-center cursor-pointer hover:bg-gray-100 rounded-md px-4 py-2 transition-all">
                                <FiLogOut className="mr-2" /> {/* React Icon */}
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <button id="toggle-sidebar"
                className='lg:hidden w-8 h-8 z-[100] fixed top-[74px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500'>
                <FiHome className="text-white" /> {/* React Icon */}
            </button>
        </>
    );
};

export default SideBar;