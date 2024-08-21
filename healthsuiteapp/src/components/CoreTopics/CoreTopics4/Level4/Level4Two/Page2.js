import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4two/page3');
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4/level4two/page1');
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
            <Typography variant="h5" sx={{ mb: 2 }}>Level 4.2: Going to the Doctor</Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>At the doctor's office:</Typography>
            <ul>
                <li>Arrive on time.</li>
                <li>Discuss key issues early.</li>
                <li>Take notes and request printed materials.</li>
                <li>Schedule the next appointment before leaving.</li>
                <li>Be honest and answer questions accurately.</li>
                <li>If you can’t join them, ensure they have their medication list, medical history, and questions.</li>
                <li>Support them if they are anxious, and let them know you'll be in the waiting room.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2 of 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
