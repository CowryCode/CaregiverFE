import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem, TableContainer, Paper } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page2 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/library/core-topic4/level2/level2one/page1'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic4/level2/level2two/page1'); // Adjust this path to point to the next page, if exists
    };

    useEffect(() => {
        savePageUrl();
        console.log(`Paged saved successfully : ${successful}` )
      }, []);
    
    const { successful, savePageUrl } = UpdateLibraryLastPage({
          setLoading: (loading) => console.log(`Loading: ${loading}`),
          handleLibraryClick: (data) => {
              console.log('Library Clicked:', data);
          },
    });


    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: '#f3f3f3' // Adjust the background color as needed
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.1: Changes in Communication</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 2</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1, padding: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: 2 }}>Persons living with dementia may:</Typography>
                <List>
                    <ListItem>Repeat familiar words.</ListItem>
                    <ListItem>Have difficulty finding the appropriate words.</ListItem>
                    <ListItem>Speak less often.</ListItem>
                    <ListItem>Use gestures to communicate instead of words.</ListItem>
                    <ListItem>Revert to communicating in their native language.</ListItem>
                    <ListItem>Experience difficulty organizing words.</ListItem>
                    <ListItem>Lose their train of thought.</ListItem>
                    <ListItem>Describe familiar objects instead of calling them by name.</ListItem>
                </List>
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
