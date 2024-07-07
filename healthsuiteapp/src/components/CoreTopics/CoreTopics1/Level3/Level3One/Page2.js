import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3one/page3'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3one/page1'); // Adjust this path based on your routing structure
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3.1: Depression</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
                <Typography sx={{ mb: 2 }}>Symptoms of depression include:</Typography>
                <ul>
                    <li>Difficulty concentrating.</li>
                    <li>Becoming easily irritated or annoyed.</li>
                    <li>Changes in appetite and/or weight.</li>
                    <li>Loss of interest in things that you once enjoyed.</li>
                    <li>Feeling worthless, guilty, or helpless.</li>
                    <li>Sleep disturbances: sleeping more than usual or experiencing difficulty falling asleep at night.</li>
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
