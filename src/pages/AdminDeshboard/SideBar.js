import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const AdminPages = ['Overview', 'Orders', 'Products', 'Categories', 'Customers'];
    let activeStyle = {
        backgroundColor: '#38B1ED',
        color: '#fff',
        transition: '0.3s'
    };
    return (
        <Box width={{ xs: '30%', md: '20%' }}
            minHeight={'80vh'}
            sx={{ backgroundColor: 'background.default', p: 2, borderRadius: 3, display: { xs: 'none', md: 'block' } }}
        >
            <Stack
                direction='row'
                spacing={2}
                alignItems='center'
                mb={2}
            >
                <Avatar alt="Jemy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography color='text.primary'>Jubair Hossen</Typography>
            </Stack>
            <Divider />
            {
                AdminPages.map((page) => (
                    <Button
                        component={NavLink}
                        to={`/Admin/${page}`}
                        key={page}
                        sx={{ my: 2, color: 'text.primary', display: 'block' }}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        {page}
                    </Button>
                ))
            }
        </Box>
    );
};

export default SideBar;