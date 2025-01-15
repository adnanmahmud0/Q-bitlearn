import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './Dashboard/SIdeBar/SideBar';

const DashboardRoot = () => {
    return (
        <>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </>
    );
};

export default DashboardRoot;