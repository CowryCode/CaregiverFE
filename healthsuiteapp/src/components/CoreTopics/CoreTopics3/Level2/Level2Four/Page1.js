import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2four/page2'); // Adjust this path according to your router setup
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2three/page3'); // Adjust this path according to your router setup
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.4: Walking and Pacing</Typography>
            <Typography variant="body1">
                <ul>
                    <li>People with dementia often walk for long periods.</li>
                    <li>Sometimes their walking is intentional/active (with a purpose); this is referred to as ‘pacing’.</li>
                    <li>Other times, their walking is passive; this is referred to as ‘wandering’.</li>
                    <li>These behaviors stem from brain changes.</li>
                    <li>They can cause disorientation and feeling lost.</li>
                    <li>Prolonged walking may lead to weight loss and dehydration.</li>
                </ul>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
