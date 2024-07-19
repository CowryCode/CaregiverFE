import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page3 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4/level4two/page2');
    };

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4three/page1')
    }

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Level 4.2: Going to the Doctor</Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>After the doctor's appointment:</Typography>
            <ul>
                <li>Fill prescriptions at the pharmacy and ask about new medications.</li>
                <li>Schedule any ordered tests.</li>
                <li>Record appointment dates in your calendar.</li>
                <li>Inform the family about the appointment if needed.</li>
                <li>Update the person's home medical records.</li>
                <li>Discuss the appointment with the person and address their questions or feelings.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 3 of 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page3;
