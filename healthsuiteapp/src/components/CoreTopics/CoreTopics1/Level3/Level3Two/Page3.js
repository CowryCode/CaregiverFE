import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page3 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3two/page2'); // Adjust this path based on your routing structure
    };

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3three/page1'); // Adjust if there is a next section
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 3.2: Anxiety</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 3 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Taking a few deep breaths to center yourself.</li>
                                    <li>Taking time to plan for the future needs of the person.</li>
                                    <li>Asking family or friends for help.</li>
                                    <li>Accessing support networks/groups.</li>
                                    <li>Accessing formal care services.</li>
                                    <li>Adding exercise to your daily routine.</li>
                                    <li>Taking time to pray or meditate.</li>
                                    <li>Speaking with your family physician if symptoms persist.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Isolating yourself from friends or family.</li>
                                    <li>Drinking alcohol or using drugs; this can worsen your anxiety.</li>
                                    <li>Dwelling on negative thoughts.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                Word count: Try (34), Avoid (29)
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button> {/* Adjust the Next button functionality as needed */}
            </Box>
        </Box>
    );
};

export default Page3;
