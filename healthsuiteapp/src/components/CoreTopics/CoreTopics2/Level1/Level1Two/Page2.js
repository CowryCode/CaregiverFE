import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic2/level1/level1three/page1'); // Adjust this path based on what comes next in your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic2/level1/level1two/page1'); // Adjust this path to go back to the first page of this topic
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Home Care</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
                <ul>
                    <li>Home care services cover nursing tasks, personal care, homemaking, and respite.</li>
                    <li>Fees are usually attached to home care.</li>
                    <li>For more information on home care, please contact your local Alzheimer Society, or dial 211 on your telephone.</li>
                    <li>You may also contact Veterans Affairs Canada (if the person living with dementia is a veteran).</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
