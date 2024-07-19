import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    // These functions handle navigation between pages. Adjust according to actual paths.
    const handlePrevious = () => {
       navigate('/library/core-topic2/level2/level2one/page2')
    };

    const handleNext = () => {
        navigate("/library/core-topic2/level3")
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.2: Accessing Support Networks and Groups</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 1 of 1</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Making a list of what it is you wish to share or discuss.</li>
                                    <li>Sharing a meaningful entry from your journal.</li>
                                    <li>Sharing your experiences as a caregiver.</li>
                                    <li>Being honest with those you are speaking to.</li>
                                    <li>Listening to the experiences of others and being open-minded.</li>
                                    <li>Asking questions; everyone’s caregiving experiences are different.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Internalizing your feelings.</li>
                                    <li>Blaming yourself for how you are feeling.</li>
                                    <li>Feeling guilty about opening up to others.</li>
                                    <li>Casting judgment on others when they speak or share their own experiences.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button> {/* Disabled since it's the first page */}
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button> {/* Disabled since there is no next page */}
            </Box>
        </Box>
    );
};

export default Page1;
