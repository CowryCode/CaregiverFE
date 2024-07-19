import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    // const handleNext = () => {
    //     navigate('/next-section-path'); // Adjust this path based on what comes next in your routing structure
    // };

    const handlePrevious = () => {
        navigate('/library/core-topic2/level3/level3two/page1'); // Navigate back to the first page of this topic
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>More Examples of Help</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <ul>
                <li>Researching treatment options.</li>
                <li>Helping the person with personal care.</li>
                <li>Listening to you and making you feel appreciated.</li>
                <li>Taking your dog for a walk.</li>
            </ul>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" disabled>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
