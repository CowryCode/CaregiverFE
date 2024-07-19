import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page3 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2two/page2'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2three/page1'); // Adjust this path to point to the next page, if exists
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: '#f3f3f3' // Adjust the background color as needed
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.2: Appearing Upset, Frustrated and Restless</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 3 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Identify any changes in health.</li>
                                    <li>Distracting the person with photos, books, their favorite TV show, or a snack.</li>
                                    <li>Reassuring the person and listening to their concerns.</li>
                                    <li>Keeping daily routines, the same (e.g., bathing, dressing, meal times, etc.).</li>
                                    <li>Allowing for activities and quiet times throughout the day.</li>
                                    <li>Supporting the person to maintain as much control of their life as they can.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Providing the person with large amounts of caffeine and sugar.</li>
                                    <li>Overstimulating environments such as clutter, noise, large groups of people, etc.</li>
                                    <li>Using a loud voice.</li>
                                    <li>Being authoritative.</li>
                                    <li>Rushing the person.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page3;
