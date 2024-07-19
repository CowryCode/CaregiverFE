import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level2/level2one/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level1/level1five/page2'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2: Communicating with Persons Living with Dementia</Typography>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Communicating with Persons Living with Dementia</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1 (CONTENT)</Typography>
            <ul>
                <li>As dementia progresses, communication becomes challenging.</li>
                <li>Expressing needs and understanding each other becomes harder.</li>
                <li>Understanding them may become increasingly difficult for you.</li>
                <li>The following section will provide you with information on changes in communication during the middle and late stages of dementia.</li>
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
