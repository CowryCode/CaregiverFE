import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2three/page2'); // Adjust this path according to your router setup
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2two/page3'); // Adjust this path according to your router setup
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h5" sx={{ mb: 1 }}>Level 2.3: Having Difficulty Sleeping</Typography>
            <Typography variant="body1">
                Persons living with dementia may have difficulty sleeping due to changes in their brains. They may also get day and night mixed up. Persons living with dementia may have trouble sleeping due to:
                <ul>
                    <li>Pain.</li>
                    <li>Exposure to too little sunlight during the day.</li>
                    <li>Exposure to too much light at night.</li>
                    <li>Too little exercise during the day.</li>
                    <li>Changes in the surrounding environment.</li>
                    <li>Frequent need to use the bathroom.</li>
                </ul>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
