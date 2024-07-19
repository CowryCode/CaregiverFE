import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3five/page3'); // Adjust this path for continuation or wrap-up
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3five/page1'); // Adjust this path to go back to the first page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Box>
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Journaling Helps To:</Typography>
                <ul>
                    <li>Record thoughts and emotions.</li>
                    <li>Pinpoint areas where support is needed.</li>
                    <li>Create caregiving strategies.</li>
                    <li>Uncover causes of depression, anxiety, or stress.</li>
                    <li>Develop coping strategies for mental health challenges.</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
