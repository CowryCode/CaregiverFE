import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page3 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2one/page2'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2two/page1'); // Adjust this path to point to the next page, if exists
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.1: Increased Restlessness and Pacing</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 3 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Addressing potential causes such as pain, hunger, or the need to use the toilet.</li>
                                    <li>Providing a calming environment.</li>
                                    <li>Turning on a lamp or overhead light to limit shadows.</li>
                                    <li>Setting and maintaining familiar routines and schedules.</li>
                                    <li>Engaging the person in activities when this behavior typically happens.</li>
                                    <li>Providing exposure to natural or artificial light in the early/late morning.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Over-stimulation such as loud background noises.</li>
                                    <li>Stressful activities such as bathing and appointments in the late afternoon.</li>
                                    <li>Extended napping during the day.</li>
                                    <li>Providing the person with large amounts of caffeine and sugar in the morning.</li>
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
