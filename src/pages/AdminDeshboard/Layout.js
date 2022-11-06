import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
    return (
        <Stack
            maxWidth={'xl'}
            direction='row'
            spacing={4}
            mx='auto'
            p={2}
        >
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default Layout;