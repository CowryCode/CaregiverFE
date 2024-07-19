import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3four/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3two/page3'); // Adjust this path based on where it should go back to
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
                <Typography variant="h5" sx={{ mb: 1, textAlign: 'center', bgcolor: '#007FFF', color: 'white', p: 1 }}>Knowing When to Seek Medical Help</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Consider speaking with your family physician if you are experiencing:</li>
                    <li>Changes in your mood.</li>
                    <li>Difficulty sleeping (e.g., falling asleep and staying asleep).</li>
                    <li>Sleeping more or less than usual.</li>
                    <li>Unexplained weight loss or gain.</li>
                    <li>Changes in your appetite.</li>
                    <li>Quickness to anger.</li>
                    <li>Difficulty concentrating.</li>
                    <li>Loss of interest in activities.</li>
                </ul>
                <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem' }}>
                    If you are having thoughts about harming yourself or the person you are caring for, please call 911 immediately.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
