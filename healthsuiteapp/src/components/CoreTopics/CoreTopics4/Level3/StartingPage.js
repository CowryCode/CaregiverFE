import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../../apicall/UpdateLibraryLastPage';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level3/level3one/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level2/level2three/page2'); // Adjust this path to the previous page
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3: Communicating With Formal Care Providers</Typography>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Communicating with Formal Care Providers</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1 (CONTENT)</Typography>
            <ul>
                <li>Caring for someone with dementia can be overwhelming and exhausting.</li>
                <li>If considering a formal care provider, you may wonder how to ensure the right fit.</li>
                <li>You might also have questions about what to ask and how to schedule them.</li>
                <li>The following sections will provide you with information on formal care providers and questions to ask when hiring or scheduling formal care providers.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;
