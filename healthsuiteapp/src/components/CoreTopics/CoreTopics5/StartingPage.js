import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../apicall/UpdateLibraryLastPage';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic5/level1'); // Adjust this path based on your routing structure
    };

    // const handlePrevious = () => {
    //     navigate('/previous-topic-page'); // Adjust this path to the previous page
    // };

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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: 'red' }}>CORE TOPIC 5</Typography>
            {/* <Typography variant="h5" sx={{ mb: 1, textAlign: 'center', color: 'blue' }}>Core Topic 5: Time Management</Typography> */}
            <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', backgroundColor: 'green', color: 'white' }}>Time Management</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>1 of 1 (CONTENT)</Typography>
            <ul>
                <li>Caring for someone with dementia can be part- or full-time.</li>
                <li>Caregivers often juggle many commitments.</li>
                <li>These can include family, community, and work.</li>
                <li>Balancing responsibilities can be challenging.</li>
                <li>Feeling there's not enough time to complete tasks is common.</li>
                <li>The following sections will provide you with information on time management strategies and managing your caregiving, community, and employment commitment.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" disabled>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;
