import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2one/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2'); // Adjust this path based on your routing structure
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between' // Ensures that pagination sticks to the bottom
        }}>
            <Box sx={{ flexGrow: 1 }}>  
                <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>Level 2.1: Exercise</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Caregiving for someone with dementia can make finding time to exercise challenging.</li>
                    <li>Prioritize your health; exercise can enhance physical and emotional well-being.</li>
                    <li>Exercise may alleviate symptoms of depression or anxiety.</li>
                    <li>Consistent short daily exercise is more beneficial than sporadic longer sessions.</li>
                    <li>Consult your doctor before starting any exercise routine.</li>
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
