import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level2/level2two/page3'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic3/level2/level2two/page1'); // Adjust this path to go back to the first page
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2.2: Appearing Upset, Frustrated and Restless</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <ul>
                <li>Factors that can contribute to a state of agitation include:</li>
                <ul>
                    <li>Physical discomfort (e.g., constipation, pain, hunger) that can't be communicated.</li>
                    <li>Impaired hearing or vision leading to misinterpretation of surroundings.</li>
                    <li>Feelings of loss.</li>
                    <li>Sudden changes in routine, environment, or caregivers.</li>
                    <li>Overstimulation or stress (e.g., noise, clutter, activity).</li>
                    <li>Insufficient stimulation.</li>
                    <li>Tasks too challenging or rushed (e.g., toileting, bathing, dressing).</li>
                    <li>Fatigue from irregular sleep or rest patterns.</li>
                </ul>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
