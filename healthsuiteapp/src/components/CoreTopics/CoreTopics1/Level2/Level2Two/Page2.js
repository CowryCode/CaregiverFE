import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2two/page1'); // Adjust this path based on your routing structure
    };

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2three/page1'); // Example redirection, change as needed
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.2: Nutrition</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 2</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Preparing easy, healthy snacks ahead of time: carrot sticks, celery sticks, hard-boiled eggs, fresh-cut fruit, etc.</li>
                                    <li>Purchasing easy, healthy snacks: fresh fruit, yogurt cups, fruit cups, granola bars, muffins, etc.</li>
                                    <li>Eating smaller portions of food throughout the day.</li>
                                    <li>Eating meals with a person with dementia.</li>
                                    <li>Simplifying meal preparation: instant mashed potatoes, instant oatmeal, soups, etc.</li>
                                    <li>Cooking meals in a slow cooker.</li>
                                    <li>Making large batches of food and freezing portions for later: chili, spaghetti sauce, lasagna, soup, etc.</li>
                                </ul>
                            </TableCell>
                            <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Skipping meals: skipping meals makes it difficult to get the vitamins and nutrients you need.</li>
                                    <li>Eating foods that are high in calories, saturated fat, sugars, or salt.</li>
                                    <li>Eating foods that are high in sugar or a heavy meal before bed.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                Word count: 80 (Try), 38 (Avoid)
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
