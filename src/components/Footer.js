import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', padding: 3, mt: 12 }}>
            <Stack direction='row' spacing={{ xs: 1, sm: 4 }} justifyContent='center'>
                <Typography
                    variant="h6"
                    // noWrap
                    component={Link}
                    to="/about"
                    sx={{
                        textDecoration: 'none',
                        color: 'text.secondary'
                    }}
                >
                    About
                </Typography>
                <Typography
                    variant="h6"
                    // noWrap
                    component={Link}
                    to="/contact"
                    sx={{
                        textDecoration: 'none',
                        color: 'text.secondary'
                    }}
                >
                    Contact
                </Typography>
                <Typography
                    variant="h6"
                    // noWrap
                    component={Link}
                    to="/support"
                    sx={{
                        mr: 2,
                        textDecoration: 'none',
                        color: 'text.secondary'
                    }}
                >
                    Support
                </Typography>
                <Typography
                    variant="h6"
                    // noWrap
                    component={Link}
                    to="/partner"
                    sx={{
                        mr: 2,
                        textDecoration: 'none',
                        color: 'text.secondary'
                    }}
                >
                    Partner
                </Typography>

            </Stack>
            <Stack direction='row' spacing={3} justifyContent='center' my={3}>
                <IconButton target='blank' href='https://www.facebook.com'
                    sx={{ color: 'text.secondary' }}
                >
                    <Facebook />
                </IconButton>
                <IconButton sx={{ color: 'text.secondary' }}>
                    <Instagram />
                </IconButton>
                <IconButton sx={{ color: 'text.secondary' }}>
                    <Twitter />
                </IconButton>
                <IconButton sx={{ color: 'text.secondary' }}>
                    <LinkedIn />
                </IconButton>
            </Stack>
            <Typography component='p' color='#fff' sx={{ textAlign: 'center' }}>
                &#169; all right reserve GrowUp
            </Typography>
        </Box>
    );
};

export default Footer;