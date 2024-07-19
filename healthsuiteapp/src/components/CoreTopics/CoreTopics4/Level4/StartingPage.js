import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4one/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level3/level3three/page2'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 4: Communicating with Physicians</Typography>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Communicating with Physicians</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>1 of 1 (CONTENT)</Typography>
            <ul>
                <li>The person you care for may have multiple health professionals involved.</li>
                <li>Doctors' appointments can be stressful and overwhelming for both of you.</li>
                <li>You both might have many questions and receive a lot of information at once.</li>
                <li>You may also need to discuss your health with your family physician.</li>
                <li>The following sections will provide you with information on questions to ask physicians and pharmacists and how to prepare for a doctor’s appointment.</li>
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
