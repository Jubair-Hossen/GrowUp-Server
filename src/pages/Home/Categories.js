import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Box, Paper, styled, Typography } from '@mui/material';
import { Login, CheckCircle, Sell, MonetizationOn, } from '@mui/icons-material';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'


const Categories = () => {
    const cards = [
        {
            title: "Singin or Singup",
            icon: <Login sx={{ fontSize: 48, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
        {
            title: "Select a t-shirt",
            icon: <CheckCircle sx={{ fontSize: 48, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
        {
            title: "Sell the t-shirt",
            icon: <Sell sx={{ fontSize: 48, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
        {
            title: "Get the profite",
            icon: <MonetizationOn sx={{ fontSize: 48, color: 'primary.text' }} />,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe"
        },
    ]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
        textAlign: 'center',
        height: 270,
        // [theme.breakpoints.down('sm')]: {
        //     height: 'auto'
        // },
        // [theme.breakpoints.down('lg')]: {
        //     height: 230
        // },
        color: theme.palette.text.primary,
    }));
    return (
        <Box component='section'
            mb={12}
            mx='auto'
            maxWidth='xl'
            px={1}
        >
            <Typography sx={{ textAlign: 'center', color: 'primary.text' }} variant='h3'>
                Our Categories
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center', color: 'text.primary', maxWidth: 600, my: 2
                }}
                mx='auto'
                component='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit atque, saepe repudiandae laborum non sequi porro animi hic similique?
            </Typography>
            <Swiper
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    cards.map(card => (
                        <SwiperSlide>
                            <Item>
                                {card.icon}
                                <Typography component='p' fontSize={26} my={1}>
                                    {card.title}
                                </Typography>
                                <Typography component='p' fontSize={14} sx={{ maxWidth: 300, mx: 'auto' }}>
                                    {card.text}
                                </Typography>
                            </Item>
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide><Item>slide 4</Item></SwiperSlide>
                <SwiperSlide><Item>slide 5</Item></SwiperSlide>
                <SwiperSlide><Item>slide 6</Item></SwiperSlide>
                <SwiperSlide><Item>slide 7</Item></SwiperSlide>
                <SwiperSlide><Item>slide 8</Item></SwiperSlide>
                <SwiperSlide><Item>slide 9</Item></SwiperSlide>
                <SwiperSlide><Item>slide 10</Item></SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default Categories;