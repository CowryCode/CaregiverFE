import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level1/level1three/page3'); // Navigate to Page 3
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level1/level1three/page1'); // Navigate back to Page 1
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h3" sx={{ mb: 1, textAlign: 'center' }}>Level 1.3: Your Child's Response</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 3</Typography>
            <ul>
                <li>Be curious about dementia.</li>
                <li>Feel sad about the person changing.</li>
                <li>Be confused about the person's behavior.</li>
                <li>Feel afraid of the person's actions.</li>
                <li>Feel jealous or resentful of your time.</li>
                <li>Feel embarrassed with friends around.</li>
            </ul>
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
