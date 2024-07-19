import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2five/page3'); // Adjust this path according to your router setup
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2five/page1'); // Adjust this path according to your router setup
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.5: Examples of Socially Inappropriate Behaviors</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <ul>
                <li>Swearing, rudeness.</li>
                <li>Overeating.</li>
                <li>Attention-seeking.</li>
                <li>Public disclosure of personal matters.</li>
                <li>Public nudity.</li>
                <li>Inappropriate physical contact.</li>
                <li>Public sexual behavior.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
