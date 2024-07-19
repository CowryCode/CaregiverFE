import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic2/level2/level2two/page1'); // Adjust this path based on what comes next in your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic2/level2/level2one/page1'); // Adjust this path to go back to the first page of this topic
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Support Networks</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <ul>
                <li>If you are looking for more information on support networks/groups, try contacting:</li>
                <li>Your friends or family.</li>
                <li>Your family physician.</li>
                <li>Community organizations.</li>
                <li>Your local health authority.</li>
                <li>Your local Alzheimer Society.</li>
                <li>Your provincial information and referral services by dialing 211 on your telephone.</li>
            </ul>
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
