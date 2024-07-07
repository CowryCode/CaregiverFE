import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3one/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3'); // Adjust this path based on where it should go back to
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
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
                <ul>
                    <li>Caregivers of those with dementia often experience depression.</li>
                    <li>Coping with changes in behavior can be overwhelming, leading to exhaustion.</li>
                    <li>Watching a loved one deteriorate is emotionally draining.</li>
                    <li>Depression rates rise as dementia progresses.</li>
                    <li>Recognize signs of depression to seek necessary support.</li>
                </ul>
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
