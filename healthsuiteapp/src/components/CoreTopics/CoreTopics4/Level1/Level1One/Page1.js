import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level1/level1one/page2'); // Adjust this path to the next page
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level1'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 1.1: Tips for Asking for Help</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
            <ul>
                <li>Caregivers of dementia patients often struggle to seek help, especially if caring for a spouse.</li>
                <li>Stigma can make it embarrassing to admit needing assistance.</li>
                <li>Patients may resist help, viewing it as an invasion of privacy.</li>
                <li>However, asking for help reflects personal strength and a commitment to quality care.</li>
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
