import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // Set this to the next content or section
        navigate('/library/core-topic1/level4/level4one/page1'); 
    };

    const handlePrevious = () => {
        // Set this to go back to the previous section or main menu
        navigate('/library/core-topic1/level3/level3five/page3'); 
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
                <Typography variant="h5" sx={{ mb: 1, textAlign: 'center', bgcolor: '#007FFF', color: 'white', p: 1 }}>Social Well-Being</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Busy caregivers may struggle to make time for enjoyable activities.</li>
                    <li>Lack of leisure or social time can lead to social isolation.</li>
                    <li>Social isolation raises depression risk and affects emotional well-being.</li>
                    <li>Resentment towards the person being cared for can harm mental health and caregiving quality.</li>
                    <li>Prioritize engaging in social and leisure activities for improved well-being and caregiving quality.</li>
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

export default StartPage;
