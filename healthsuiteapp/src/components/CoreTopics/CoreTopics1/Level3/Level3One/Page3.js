import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page3 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3one/page2'); // Adjust this path based on your routing structure
    };

    const handleNext = () => {
        // navigate('/level-3-1/next-section'); // Uncomment and adjust if there is a next section
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 3.1: Depression</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 3 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Spending time with friends or family.</li>
                                    <li>Asking family or friends for help.</li>
                                    <li>Accessing support networks/groups.</li>
                                    <li>Accessing formal care providers.</li>
                                    <li>Adding exercise to your daily routine.</li>
                                    <li>Setting time aside for the activities you enjoy.</li>
                                    <li>Getting enough sleep every night.</li>
                                    <li>Speaking with your family physician if symptoms persist.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Expecting your mood to improve quickly.</li>
                                    <li>Isolating yourself from friends and family.</li>
                                    <li>Making important decisions until your depression has alleviated.</li>
                                    <li>Dwelling on negative thoughts.</li>
                                    <li>Drinking alcohol or using drugs; this can worsen your depression.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                Word count: Try (47), Avoid (29)
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button> {/* Disable Next if no next page */}
            </Box>
        </Box>
    );
};

export default Page3;
