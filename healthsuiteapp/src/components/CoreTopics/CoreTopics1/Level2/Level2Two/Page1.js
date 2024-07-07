import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2two/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2one/page2'); // Adjust this path based on your routing structure or where it should go back to
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.2: Nutrition</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Caregiving for someone with dementia can make it hard to eat or cook for yourself.</li>
                    <li>Busy schedules can lead to rushed meals or inadequate meal planning.</li>
                    <li>Prioritize nutrition; a balanced diet supports health and activity levels, providing essential nutrients.</li>
                    <li>For more information on grocery or food delivery services, please dial 211 on your telephone.</li>
                    <li>For more information on nutrition and a balanced diet, please consult Canada’s Food Guide at food-guide.canada.ca.</li>
                    <li>If you have concerns about your diet, please arrange to speak with a dietitian or your family physician.</li>
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
