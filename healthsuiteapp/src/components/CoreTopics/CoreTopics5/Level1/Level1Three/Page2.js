import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic5/level1/level1three/page3'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic5/level1/level1three/page1'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 1.3: Employment Commitments</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 3</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Benefits of communicating with your employer include:</Typography>
            <ul>
                <li>Maintaining income while providing insight into your caregiving role.</li>
                <li>Setting workplace expectations.</li>
                <li>Gaining workplace support.</li>
                <li>Exploring flexibility for caregiving duties in the workplace.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
