import { Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const NotFound = () => {
    return (
        <Stack
            justifyContent='center'
            alignItems='center'
            sx={{ height: '100vh', p: 3 }}
        >
            <Card variant='outlined' sx={{ p: 5, textAlign: 'center', bgcolor: 'background.default' }}>
                <Typography variant='h3'>Oops!</Typography>
                <Typography sx={{ mt: 5 }} variant='h5'>The Page You Are Loking for is not found</Typography>
            </Card>
        </Stack>
    );
};

export default NotFound;