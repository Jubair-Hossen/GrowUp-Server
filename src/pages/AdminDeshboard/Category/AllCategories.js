import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/category')
            .then(res => res.json())
            .then(data => setCategories(data.data))
    }, [])

    return (
        <Stack direction='row' spacing={12}>
            {
                categories.map(category => <Box key={category._id}>
                    <Typography variant='h5'>{category.name}</Typography>
                    <img width='200px' src={category.photoUrl} alt="" />
                    <Typography>{category.description}</Typography>
                    <Typography color='#777' fontSize='12px'>
                        Created: <Moment format="D MMM YYYY" withTitle>{category.updatedAt}</Moment>
                    </Typography>
                    <Typography color='#777' fontSize='12px'>
                        Updated: <Moment fromNow>{category.updatedAt}</Moment>
                    </Typography>
                </Box>)
            }
        </Stack>
    );
};

export default AllCategories;