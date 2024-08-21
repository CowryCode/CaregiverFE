import React, {useEffect} from 'react';
import UpdateLibraryLastPage from '../../../../apicall/UpdateLibraryLastPage';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3one/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2three/page2'); // Adjust this path based on where it should go back to
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
                <Typography variant="h5" sx={{ mb: 1, textAlign: 'center', bgcolor: '#007FFF', color: 'white', p: 1 }}>Emotional Well-being</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>As a caregiver of a person living with dementia, you may experience changes in your mood and emotional well-being.</li>
                    <li>Changes in the person’s behaviours, needs and sleeping patterns may affect both your emotional well-being and quality of life.</li>
                    <li>The following sections will provide you with information on stress, depression, anxiety, when to seek medical help, relaxation, and journaling.</li>
                </ul>
                <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>
                    Reference: American Psychiatric Association. (2018). Warning signs of mental illness. Retrieved from https://www.psychiatry.org/patients-families/warning-signs-of-mental-illness
                </Typography>
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

export default StartingPage;
