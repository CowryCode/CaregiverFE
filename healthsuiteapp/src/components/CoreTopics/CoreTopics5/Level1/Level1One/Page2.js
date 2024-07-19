import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic5/level1/level1one/page1'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic5/level1/level1two/page1'); // Adjust this path to point to the next page, if exists
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 1.1: Caregiving Commitments</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Keeping an updated calendar of your family's activities and appointments.</li>
                                    <li>Creating 'to-do lists'. Put the most important items at the top of the list and attend to those items first.</li>
                                    <li>Asking family and friends for help with caregiver responsibilities.</li>
                                    <li>Accessing formal care providers.</li>
                                    <li>Scheduling time for friends and family.</li>
                                    <li>Saying “no” to commitments when you are feeling overwhelmed.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Feeling guilty about asking for help.</li>
                                    <li>Feeling guilty if you must cancel social engagements.</li>
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
