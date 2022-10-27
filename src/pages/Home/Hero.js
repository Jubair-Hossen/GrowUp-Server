import { CardMedia, Typography, Stack, Box, Button } from '@mui/material';
import React from 'react';
import Image from '../../Images/man-smile.png'
const Hero = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            mb={2}
            component='section'
            direction={{ xs: 'column', sm: 'row' }} >
            <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                <Typography
                    variant='h1'
                    color='text.primary'
                >
                    Start Your <Box component="span" color="primary.text">Bussiness</Box> Today!
                </Typography>
                <Typography
                    my={3}
                    variant='h6'
                    color='text.primary'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem adipisci dignissimos cupiditate, labore nisi mollitia odit assumenda officiis eum.
                </Typography>
                <Button variant='contained'>Start Now</Button>
            </Box>
            <Box>
                <CardMedia
                    component="img"
                    image={Image}
                    sx={{ width: "80%", marginX: 'auto' }}
                    alt="Man sitting with laptop"
                />
            </Box>
        </Stack >
    );
};

export default Hero;