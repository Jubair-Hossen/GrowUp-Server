import { Box } from '@mui/material';
import React from 'react';
import Categories from './Categories';
import Customize from './Customize';
import Hero from './Hero';
import PropularProducts from './PropularProducts';
import WeWorks from './WeWorks';
const Home = () => {
    window.scrollTo(0, 0)
    return (
        <Box mt={2}>
            <Hero />
            <WeWorks />
            <Customize />
            <Categories />
            <PropularProducts />
        </Box>
    );
};

export default Home;