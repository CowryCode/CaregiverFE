import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic4/level1/level1four/page1'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic4/level1/level1five/page1'); // Adjust this path to point to the next page, if exists
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 1.4: Asking Siblings for Help</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Using 'I' statements when asking for help, such as "I need help with..."</li>
                                    <li>Being direct and specific with your request for help. Use clear language.</li>
                                    <li>Being realistic with your requests for help.</li>
                                    <li>Trying to accept your siblings for who they are.</li>
                                    <li>Monitoring your tone of voice and the language you use.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Using 'you' statements when asking for help, such as "You need to help with..."</li>
                                    <li>Power struggles with your siblings.</li>
                                    <li>Letting inheritance and financial issues pull you apart.</li>
                                    <li>Assuming your siblings know you need help.</li>
                                    <li>Saying hurtful things.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
