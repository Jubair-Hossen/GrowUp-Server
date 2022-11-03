import React from 'react';
import { Box, Stack, CardMedia, Typography, Button } from '@mui/material';
import Image from '../../Images/customize.png'

const Customize = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', px: 1, pt: 2, mb: 12 }}>
            <Stack direction={{ xs: 'column-reverse', md: 'row' }} alignItems='center' spacing={3} maxWidth='xl'>
                <Box width={{ xs: '100%', md: '50%' }}>
                    <CardMedia
                        component="img"
                        image={Image}
                        sx={{ width: "80%", marginX: 'auto' }}
                        alt="Man sitting with laptop"
                    />
                </Box>
                <Box width={{ xs: '100%', md: '50%' }}>
                    <Typography
                        variant='h4'
                        mb={3}
                        color='text.primary'
                    >
                        Fully customizeable
                    </Typography>
                    <Typography
                        component='p'
                        mb={3}
                        color='text.primary'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo eos iste quo sapiente, recusandae voluptates quisquam eligendi dolorem saepe aspernatur? Voluptate, aliquid odio. Ipsam aliquam qui incidunt architecto ipsum rem, odio nihil dolor nemo, labore quidem perferendis! Quaerat.
                    </Typography>
                    <Button
                        sx={{
                            backgroundColor: 'secondary.main',
                            color: 'text.secondary'
                        }}
                    >
                        Customize Now
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default Customize;