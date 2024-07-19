import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level3/level3three/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level3/level3two/page1'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: 'background.paper'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3.3: Scheduling Formal Care Providers</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
            <ul>
                <li>If the person with dementia lives with you, arrange formal care for short or extended periods.</li>
                <li>For those living alone, schedule formal care for several hours or round-the-clock.</li>
                <li>Ask about scheduling to prepare a backup plan for caregiver absence.</li>
                <li>This allows you to meet your needs and adjust your caregiving schedule.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
