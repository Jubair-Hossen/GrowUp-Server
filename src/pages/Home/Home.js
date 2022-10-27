import { Box } from '@mui/material';
import React from 'react';
import Hero from './Hero';
import WeWorks from './WeWorks';
const Home = () => {
    return (
        <Box maxWidth='xl' sx={{ px: 1, mx: 'auto', mt: 2 }}>
            <Hero />
            <WeWorks />
        </Box>
    );
};

export default Home;