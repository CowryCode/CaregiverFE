import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level2/level2one/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level2'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.1: Changes in Communication</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
            <ul>
                <li>Dementia alters brain function, impacting thinking and communication.</li>
                <li>Various types of dementia affect the brain uniquely.</li>
                <li>Communication challenges can frustrate those with dementia.</li>
                <li>Caregivers may also find it hard to communicate or understand them.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
