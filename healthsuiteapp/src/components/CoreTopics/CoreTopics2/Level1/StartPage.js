import React, {useEffect} from 'react';
import UpdateLibraryLastPage from '../../../../apicall/UpdateLibraryLastPage';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // Adjust this to navigate to the next relevant content or section
        navigate('/library/core-topic2/level1/level1one/page1'); 
    };

    const handlePrevious = () => {
        // Set this to navigate back to the main menu or previous section
        navigate('/library/core-topic2'); 
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
            <Typography variant="h4" sx={{ color: 'blue', textAlign: 'center', mb: 3 }}>Accessing Formal Care Providers</Typography>
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>If you are feeling overwhelmed, you may consider involving formal care providers.</li>
                    <li>They're trained to assist caregivers and those with dementia, usually with fees.</li>
                    <li>The following sections will provide you with information on Home care, Companionship, Respite, and Adult day programs.</li>
                </ul>
                <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>
                    Reference: McKenzie, R. (2019).
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
