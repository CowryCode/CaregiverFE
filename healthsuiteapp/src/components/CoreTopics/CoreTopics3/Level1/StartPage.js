import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level1/level1one/page1'); // Adjust this path to navigate to the next relevant content or section
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3'); // Set this to navigate back to the main menu or previous section
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h3" sx={{ color: 'red', textAlign: 'center', mb: 1 }}>Level 1: Your Living Situation</Typography>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', bgcolor: 'orange', color: 'white', p: 1 }}>Your Living Situation</Typography>
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>As dementia advances, those living with it often require more care and supervision, even if they prefer to stay at home.</li>
                    <li>Caregivers might find themselves managing dementia care remotely or consider inviting the person into their own home.</li>
                    <li>The following sections will provide you with information on caregiving from a distance, living with persons with dementia, and caregiving with children in your home.</li>
                </ul>
                <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>
                    Reference: Alzheimer Society of Canada. Inviting someone to move in with you.
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

export default StartingPage;
