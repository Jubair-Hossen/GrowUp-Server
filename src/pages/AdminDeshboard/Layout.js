import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
    window.scrollTo(0, 0)
    return (
        <Stack
            maxWidth={'xl'}
            direction='row'
            spacing={4}
            mx='auto'
            p={1}
        >
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default Layout;