import { Button } from '@mui/material';
import React from 'react';

const ImageUpload = () => {
    const handleUpload = () => {
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dcxroam4v',
            uploadPreset: 'kp6qf7tv'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
            }
        }
        )
        myWidget.open();
    }
    return (
        <div>
            <Button variant='container' onClick={handleUpload}>Upload</Button>
        </div>
    );
};

export default ImageUpload;