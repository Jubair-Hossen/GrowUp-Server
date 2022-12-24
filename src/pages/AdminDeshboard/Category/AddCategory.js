import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AddCategory = () => {
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const previewImage = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.addEventListener("load", () => {
            setImage(reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = { name, desc, image };
        fetch('http://localhost:5000/api/v1/category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    e.target.reset();
                    setImage('');
                    console.log(data);
                }
            })
    }
    return (
        <Box>
            <Typography
                my={2}
                variant='h5'
                to='/Admin/Categories/add-new'
                sx={{ color: 'text.primary', fontSize: '16px', textDecoration: 'none' }}
            >
                Add New Category
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <Typography sx={{ color: 'text.primary', fontSize: '12px', display: 'block', mb: 1 }} component={'label'}>Name</Typography>
                        <TextField fullWidth name='name' color='primary' size='small' variant="outlined" />

                        <Typography sx={{ color: 'text.primary', fontSize: '12px', display: 'block', my: 1 }} component={'label'}>Description</Typography>
                        <TextField
                            multiline
                            minRows={5}
                            maxRows={10}
                            onBlur={(e) => setDesc(e.target.value)}
                            fullWidth color='primary' size='small' variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography sx={{ fontSize: '12px', }} component='label'>Category Image</Typography>
                        <Box
                            sx={{
                                mt: 1,
                                padding: 2,
                                border: '1px dashed',
                                borderColor: 'text.primary',
                                bgcolor: 'background.default',
                                width: 'calc(100vw/4)',
                                height: 'calc(100vw/6)'
                            }}>
                            <Box width='100%' height='100%' overflow='hidden'>
                                {
                                    image ?
                                        <img width='100%' alt='jubair' src={image} />
                                        :
                                        <Typography for="image" sx={{ mt: 2, cursor: 'pointer', color: 'text.primary', display: 'block', mb: 1 }} component={'label'}>
                                            <img width='100%' src='https://cdn2.vectorstock.com/i/1000x1000/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg' alt='jubair' />
                                        </Typography>
                                }
                                <TextField
                                    sx={{ display: 'none' }}
                                    id='image'
                                    onChange={previewImage}
                                    type={'file'}
                                    color='primary'
                                    size='small'
                                    variant="outlined" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                    sx={{ color: 'text.secondary', display: 'block', mt: 2 }}
                    variant='contained'>Add</Button>
            </form>
        </Box >
    );
};

export default AddCategory;