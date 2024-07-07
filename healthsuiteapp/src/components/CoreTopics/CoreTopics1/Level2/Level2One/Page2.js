import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2one/page1'); // Adjust this path based on your routing structure
    };

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2two/page1'); // Example redirection, change as needed
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.1: Exercise</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 2</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Setting aside scheduled time to exercise.</li>
                                    <li>Doing stretches or watching an exercise video while the person is resting.</li>
                                    <li>Being active with the person you are caring for.</li>
                                    <li>Sharing your caregiving responsibilities with family or friends.</li>
                                    <li>Accessing formal supports such as adult day programs or companionship.</li>
                                    <li>Signing up for a weekly exercise class at your local recreation or community center.</li>
                                    <li>Exercising with a friend.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Feeling guilty if you are having difficulty finding time to exercise.</li>
                                    <li>Pushing yourself too hard when you exercise; can increase your risk of straining muscles or harming yourself.</li>
                                    <li>Activities that will leave you feeling sore and exhausted afterward.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                Reference: National Institute on Aging (n.d.). Caregivers and exercise- take time for yourself. Retrieved from https://go4life.nia.nih.gov/caregivers-and-exercise-take-time-for-yourself/; Macdonald, D. (2019 January 18). Personal communication; McKenzie, R. (2109).
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
