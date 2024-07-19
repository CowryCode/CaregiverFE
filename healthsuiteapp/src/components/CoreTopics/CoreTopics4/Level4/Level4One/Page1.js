import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4one/page2'); // Adjust this path to the next page
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4'); // Adjust this path to the previous page
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Worksheet for Medical Appointments</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
            <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    With a large healthcare team, it can be hard to track appointments and questions.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    A worksheet helps organize thoughts and concerns for medical appointments.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Create your own worksheet before the appointment.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Organize issues from most to least important.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Bring the worksheet to appointments to discuss your concerns with the doctor and healthcare team.
                </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>Example of a Worksheet:</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Doctor’s Name</TableCell>
                            <TableCell>Appointment Date</TableCell>
                            <TableCell>Appointment Time</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1 of 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
