import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page3 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2four/page2'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2five/page1'); // Adjust this path to point to the next page, if exists
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.4: Walking and Pacing</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 3 of 3</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Determining what the person is trying to express.</li>
                                    <li>Determining why the person wants to go home.</li>
                                    <li>Distracting the person with an activity.</li>
                                    <li>Removing objects from the environment that may remind the person to go home, such as shoes, jackets, purses, etc.</li>
                                    <li>Reassuring the person.</li>
                                    <li>Giving the person an incentive to stay, such as a cup of coffee or a snack.</li>
                                    <li>Providing a safe space for wandering or pacing.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Contradicting the person and their wish to go home or find someone.</li>
                                    <li>Prohibiting them from wandering or pacing.</li>
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
