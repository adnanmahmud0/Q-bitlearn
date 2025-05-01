import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Dashboard/SIdeBar/SideBar';
import Navbar from './Navbar/Navbar';

const DashboardRoot = () => {
    return (
        <>
            <Navbar></Navbar>
            <SideBar></SideBar>
            <div className='bg-gray-200/50'>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default DashboardRoot;