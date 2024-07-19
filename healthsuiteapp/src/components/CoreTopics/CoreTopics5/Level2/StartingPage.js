import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic5/level2/level2one/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic5/level1/level1three/page3'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2: Time Management Strategies</Typography>
            <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', backgroundColor: 'green', color: 'white' }}>Time Management Strategies</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1 (CONTENT)</Typography>
            <ul>
                <li>Caring for someone with dementia can be a part- or full-time job.</li>
                <li>You may feel there isn't enough time to get everything done.</li>
                <li>You might lack time for yourself, family, or friends.</li>
                <li>The following section will provide you with information on time management strategies.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;
