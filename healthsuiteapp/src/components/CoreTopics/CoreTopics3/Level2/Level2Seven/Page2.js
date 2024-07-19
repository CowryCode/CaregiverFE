import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2seven/page3'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2seven/page1'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.7: Collecting and Moving Items</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Reasons for such actions include:</Typography>
                <ul>
                    <li>Searching for something</li>
                    <li>Boredom or under-stimulation</li>
                    <li>Fear of theft of valuable personal items</li>
                    <li>Recalling memories from the past</li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
