import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3two/page2'); // Adjust this path based on your routing structure
    };
    

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3one/page3'); // Adjust this path based on where it should go back to
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3.2: Anxiety</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
                <ul>
                    <li>Caregiving for someone with dementia can feel overwhelming.</li>
                    <li>Uncertainty about the future for you and the person you care for is common.</li>
                    <li>Concerns about their well-being and your caregiving abilities may arise.</li>
                    <li>Understanding the disease progression can also be uncertain.</li>
                    <li>Anxiety, characterized by worry and fear, can affect your quality of life.</li>
                    <li>Recognizing signs of anxiety is crucial for seeking support.</li>
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
