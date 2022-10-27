import React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { AccessAlarm } from '@mui/icons-material';


const WeWorks = () => {
    const cards = [
        {
            title: "Singin or Singup",
            icon: <AccessAlarm sx={{ fontSize: 56, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
        {
            title: "Select a product",
            icon: <AccessAlarm sx={{ fontSize: 56, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
        {
            title: "Sell the product",
            icon: <AccessAlarm sx={{ fontSize: 56, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
        {
            title: "Get the profite",
            icon: <AccessAlarm sx={{ fontSize: 56, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
    ]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
        textAlign: 'center',
        // height: 270,
        // [theme.breakpoints.down('sm')]: {
        //     height: 'auto'
        // },
        // [theme.breakpoints.down('lg')]: {
        //     height: 230
        // },
        color: theme.palette.text.primary,
    }));
    return (
        <Box component='section' mb={2}>
            <Typography sx={{ textAlign: 'center', color: 'primary.text' }} variant='h3'>
                How we works
            </Typography>
            <Typography sx={{
                textAlign: 'center', color: 'text.primary', maxWidth: 600, my: 2
            }}
                mx='auto'
                component='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe repudiandae laborum non sequi porro animi hic similique?
            </Typography>
            <Grid container spacing={2} sx={{ gridAutoColumns: '1fr' }}>
                {
                    cards.map(card => (
                        <Grid item xs={12} sm={6} lg={3}>
                            <Item elevation={1}>
                                {card.icon}
                                <Typography variant='h4' my={1}>
                                    {card.title}
                                </Typography>
                                <Typography component='p' sx={{ maxWidth: 300, mx: 'auto' }}>
                                    {card.text}
                                </Typography>
                            </Item>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default WeWorks;