import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2one/page1'); // Adjust to navigate to the next section
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level1/level1three/page3'); // Adjust to navigate back to the previous section or main menu
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h3" sx={{ mb: 1, textAlign: 'center', bgcolor: 'orange' }}>Level 2: Coping with Behaviours</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
            <ul>
                <li>Dementia impairs understanding of surroundings and experiences.</li>
                <li>Disease progression alters brain structure and function.</li>
                <li>Changed behaviors impact the quality of life and caregiver exhaustion.</li>
                <li>All behaviors have meaning; understanding them is crucial for effective strategies.</li>
                <li>The following section provides information and strategies for commonly occurring behaviours experienced by persons with dementia.</li>
            </ul>
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
