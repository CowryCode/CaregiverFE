import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page1 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic1/level4')
    }
    // const handleNext = () => {
    //     navigate('/level-4-1/page2'); // Adjust this path based on your routing structure
    // };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: '#f3f3f3' // Adjust the background color as needed
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 4.1: Social & Leisure Activities</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 1 of 1</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Setting aside scheduled time for social and leisure activities every week.</li>
                                    <li>Signing up for a weekly class/activity at your local recreation or community center.</li>
                                    <li>Sharing your caregiving responsibilities with family or friends.</li>
                                    <li>Accessing formal supports such as adult day programs or companionship.</li>
                                    <li>Gardening, reading, going for a walk, or listening to music.</li>
                                    <li>Meeting with a friend for coffee, tea, or lunch.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Isolating yourself from friends and family.</li>
                                    <li>Feeling guilty about taking time for yourself.</li>
                                    <li>Trying to carry the weight of your caregiving responsibilities on your own.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button> {/* Disable as this is the first page */}
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>End Of Level1</Typography>
                <Button variant="contained" disabled>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
