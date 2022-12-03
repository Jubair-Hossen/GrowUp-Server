import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
    window.scrollTo(0, 0)
    return (
        <Stack
            maxWidth={'xl'}
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 0, md: 4 }}
            mx='auto'
            p={1}
        >
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default Layout;