import { Button, Grid, Menu, MenuItem, Paper, Typography } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Box, Stack } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import Moment from 'react-moment';
import { useState } from 'react';

const AllCategories = () => {

    const { isLoading, refetch, data } = useQuery(['categories'], () => fetch('http://localhost:5000/api/v1/category', {
        method: 'GET'
    })
        .then(res => res.json())
    )

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/v1/category/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.deletedCount) {
                    handleClose()
                    refetch()
                }
            })
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [id, setId] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event, _id) => {
        setAnchorEl(event.currentTarget);
        setId(_id)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setId(null)
    };

    if (isLoading) {
        return <h1>loading...</h1>
    }

    return (
        <Grid container spacing={{ xs: 0, lg: 2 }} width='100%'>
            {
                data.data.map(category => <Grid
                    xs={12} lg={6}
                    item key={category._id}>
                    <Paper sx={{ mt: 2 }}>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
                            <Stack direction='row' spacing={2}>
                                <Box sx={{ width: '150px', height: '80px', overflow: 'hidden' }}>
                                    <img width='100%' src={category.photoUrl} alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h5' fontSize={17} my='2px'>{category.name}</Typography>
                                    <Typography color='#777' fontSize='12px'>
                                        Created: <Moment format="D MMM YYYY" withTitle>{category.updatedAt}</Moment>
                                    </Typography>
                                    <Typography color='#777' fontSize='12px'>
                                        Updated: <Moment fromNow>{category.updatedAt}</Moment>
                                    </Typography>
                                    {/* <Button onClick={() => handleDelete(category._id)}>delete</Button> */}
                                </Box>
                            </Stack>
                            <Box padding={1} sx={{ height: '100%', cursor: 'pointer' }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={(e) => handleClick(e, category._id)}
                            >
                                <Typography variant='h5'><MoreVert /></Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>)
            }
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>details</MenuItem>
                <MenuItem onClick={handleClose}>edit</MenuItem>
                <MenuItem onClick={() => handleDelete(id)}>delete</MenuItem>
            </Menu>
        </Grid >
    );
};

export default AllCategories;