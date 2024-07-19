import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level3/level3two/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level3/level3one/page1'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3.1: Formal Care Providers</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <ul>
                <li>Finding the right match between the person with dementia and a formal caregiver is crucial.</li>
                <li>Safety and comfort are paramount for the person with dementia and their caregiver.</li>
                <li>Identify your required services before reaching out to a formal caregiver.</li>
                <li>Formal caregivers usually charge fees for their services.</li>
                <li>For more information on formal care providers, please contact your local Alzheimer's Society, or dial 211 on your telephone to access your provincial information and referral services.</li>
                <li>You may also contact Veterans Affairs if the person living with dementia is a veteran.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
