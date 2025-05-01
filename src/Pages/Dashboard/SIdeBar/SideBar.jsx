import React, { useContext, useEffect } from "react";
import { FiHome, FiUser, FiLogOut, FiBook, FiPlusCircle, FiList, FiDollarSign } from "react-icons/fi";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { MdHouseSiding } from 'react-icons/md';
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { LuLayoutDashboard } from "react-icons/lu";
const SideBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    const axiosSecure = useAxiousSecure();
    const email = user?.email;
    const { data } = useQuery({
        queryKey: ["classes", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${email}`);
            return res.data;
        },
    });

    useEffect(() => {
        const toggleSidebarBtn = document.getElementById("toggle-sidebar");
        const sidebarMenu = document.getElementById("sidebar-collapse-menu");

        const handleSidebarToggle = () => {
            if (!sidebarMenu.classList.contains("open")) {
                sidebarMenu.classList.add("open");
                sidebarMenu.style.cssText = "width: 250px; visibility: visible; opacity: 1;";
                toggleSidebarBtn.style.cssText = "left: 236px;";
            } else {
                sidebarMenu.classList.remove("open");
                sidebarMenu.style.cssText = "width: 0; visibility: hidden; opacity: 0;";
                toggleSidebarBtn.style.cssText = "left: 10px;";
            }
        };

        toggleSidebarBtn?.addEventListener("click", handleSidebarToggle);

        return () => {
            toggleSidebarBtn?.removeEventListener("click", handleSidebarToggle);
        };
    }, []);

    return (
        <>
            <header className='flex shadow-md py-2 px-6 sm:px-8 bg-base-100 min-h-[70px] tracking-wide z-[110] fixed top-0 w-full'>
                <div className='flex items-center justify-between w-full'>
                    <Link to="/" className='flex items-center'>
                        <img src={logo} alt="logo" className='w-10' />
                        <p className="text-xl font-extrabold ml-2"><span className="text-[#F22480]">Q-bit</span><span className="text-[#592ADF]">learn</span></p>
                    </Link>

                    <button id="toggle-sidebar" className='lg:hidden flex items-center justify-center outline-none'>
                        <FaBars className="w-7 h-7 text-[#592ADF]" />
                    </button>
                </div>
            </header>

            <div id="sidebar-collapse-menu"
                className="h-screen bg-base-100 shadow-lg fixed top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max transition-all duration-500">
                <ul className="space-y-3 p-4">
                    <li>
                        <Link to="/Dashboard" className=" text-sm flex items-center hover:bg-[#F22480] hover:text-white rounded-md px-4 py-2 transition-all">
                            <LuLayoutDashboard  className="mr-2" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className=" text-sm flex items-center hover:bg-[#F22480] hover:text-white rounded-md px-4 py-2 transition-all">
                            <FiHome className="mr-2" />
                            <span>Home</span>
                        </Link>
                    </li>
                    {data === "Admin" && <>
                        <li>
                            <Link to="/Dashboard/TeacherRequest" className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                                <FiUser className="mr-2" />
                                <span>Teacher Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Dashboard/users' className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                                <FiUser className="mr-2" />
                                <span>Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/AllClasses" className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                                <FiList className="mr-2" />
                                <span>All Classes</span>
                            </Link>
                        </li>
                    </>}
                    {data === 'Teacher' && <>
                        <li>
                            <Link to="/Dashboard/AddClass" className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                                <FiPlusCircle className="mr-2" />
                                <span>Add Class</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard/MyClasses" className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                                <FiBook className="mr-2" />
                                <span>My Classes</span>
                            </Link>
                        </li>
                    </>}
                    {data === 'User' && <>
                        <li>
                            <Link to="/Dashboard/My-enroll-class" className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                                <FiBook className="mr-2" />
                                <span>My Enrolled Classes</span>
                            </Link>
                        </li>
                    </>}
                    <li>
                        <Link to="/Dashboard/My-Profile" className=" text-sm flex items-center hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                            <FiUser className="mr-2" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleLogOut} className=" text-sm flex items-center cursor-pointer hover:bg-[#FFBB01] hover:text-white rounded-md px-4 py-2 transition-all">
                            <FiLogOut className="mr-2" />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBar;
