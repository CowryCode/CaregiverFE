import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level1/level1Two/page2');
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level1/level1One/page1'); // Adjust this as needed based on your routing logic
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between' // Adjusts main container to justify content
        }}>
            <Box>
                <Typography variant="h2" sx={{ mb: 2, fontSize: '1.5rem', color: '#007FFF', textAlign: 'center' }}>
                    Level 1.2: Taking a Break from Caregiving
                </Typography>
                <Typography variant="h3" sx={{ mb: 1, fontSize: '1.25rem' }}>
                    Page 1 of 2 (scroll/paginate)
                </Typography>
                <ul sx={{ pl: 2 }}>
                    <li>Disease progression may increase caregiving needs, leading to stress.</li>
                    <li>Develop a backup plan for coping with caregiving stress.</li>
                    <li>Plan may involve respite care, adult day programs, companionship, and home care.</li>
                    <li>Seek help from family or friends if needed.</li>
                </ul>
                <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>(Word count: 61)</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
