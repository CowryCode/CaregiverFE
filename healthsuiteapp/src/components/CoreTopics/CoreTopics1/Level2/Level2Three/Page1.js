import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2three/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2two/page1'); // Adjust this path based on your routing structure or where it should go back to
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
            justifyContent: 'space-between'
        }}>
            <Box>
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.3: Sleep Disturbances</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Caregivers of those with dementia may face sleep disruptions.</li>
                    <li>Stress, uncertainty, depression, or anxiety can contribute to sleep issues.</li>
                    <li>Changes in the person's behavior or sleep patterns can also disrupt sleep.</li>
                    <li>Dementia progression often brings sleep challenges, like difficulty staying asleep and frequent waking.</li>
                    <li>Restlessness, wandering, or calling out can occur when awake.</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
