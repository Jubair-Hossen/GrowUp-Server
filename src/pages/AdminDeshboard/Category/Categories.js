import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { AddBox, Category } from '@mui/icons-material';

const Categories = () => {
    return (
        <Box width={{ xs: '70%', md: '80%' }}>
            <Stack
                spacing={1}
                direction='row'
                alignItems='center'
                bgcolor='background.default'
                p={1}
                width='100%'
            >
                <Category sx={{ color: 'text.primary', fontSize: '36px' }} />
                <Box flexGrow={1}>
                    <Typography variant='h6' color={"text.primary"}>Categories</Typography>
                    <Typography to='/Admin/Categories' component={NavLink} color={"text.primary"} fontSize='12px'>4 categories</Typography>
                </Box>

                <Typography
                    component={NavLink}
                    to='/Admin/Categories/add-new'
                    sx={{ color: 'text.primary', textDecoration: 'none' }}
                >
                    <AddBox />
                </Typography>
            </Stack>
            <Outlet />
        </Box>
    );
};

export default Categories;