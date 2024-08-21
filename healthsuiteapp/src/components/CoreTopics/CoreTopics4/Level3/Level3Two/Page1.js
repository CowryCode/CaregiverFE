import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page1 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic4/level3/level3three/page1'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level3/level3one/page2'); // Adjust this path to the previous page
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
            backgroundColor: 'background.paper' // Ensuring no yellow background is applied
        }}>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3.2: Questions to Ask Formal Care Providers</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
            <Typography sx={{ mb: 2 }}>When hiring a formal care provider, ask:</Typography>
            <ul>
                <li>Experience with dementia?</li>
                <li>Training in dementia care?</li>
                <li>Years working with dementia?</li>
                <li>Ensuring compatibility?</li>
                <li>First aid/CPR certification?</li>
                <li>Criminal record check available?</li>
                <li>Service fees?</li>
                <li>Is your organization accredited?</li>
                <li>Backup provider if ill?</li>
                <li>Employee training provided?</li>
                <li>Contact for service concerns?</li>
                <li>Support capability?</li>
                <li>Transportation assistance?</li>
                <li>Insurance coverage?</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
