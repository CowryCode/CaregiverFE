import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level1/level1three/page2'); // Adjust to navigate to Page 2
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level1/level1two/page3'); // Adjust to navigate back to the previous section or main menu
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h3" sx={{ mb: 1, textAlign: 'center', bgcolor: 'orange' }}>Level 1.3: Living with Children in Your Home</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 3</Typography>
            <ul>
                <li>As a caregiver, you may also have your children to care for.</li>
                <li>Your children may feel uncertain about their relationship with you when another person is living in the home.</li>
                <li>They may feel their privacy is invaded.</li>
                <li>Talking to your child about their feelings and the changes is crucial.</li>
                <li>For more information on how to speak to your children about dementia, please contact your local Alzheimer's Society.</li>
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

export default Page1;
