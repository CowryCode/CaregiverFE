import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2four/page3'); // Adjust this path according to your router setup
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2four/page1'); // Adjust this path according to your router setup
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Reasons for Wandering</Typography>
            <Typography variant="body1">
                <ul>
                    <li>Searching for someone or something.</li>
                    <li>Unable to communicate physical discomfort like constipation or pain.</li>
                    <li>Discomfort with room conditions like temperature or lighting.</li>
                    <li>Overstimulation.</li>
                    <li>Understimulation, like excess energy or boredom.</li>
                    <li>Experiencing "sundowning".</li>
                    <li>Feeling the need to be somewhere, like home to see family.</li>
                </ul>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
