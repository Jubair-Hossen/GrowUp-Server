import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

const AddCategory = () => {
    return (
        <Box>
            <Typography
                my={3}
                variant='h5'
                to='/Admin/Categories/add-new'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
            >
                Add New Category
            </Typography>
            <form>
                <TextField color='primary' size='small' label="Outlined" variant="outlined" />
            </form>
        </Box>
    );
};

export default AddCategory;