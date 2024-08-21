import React, {useEffect} from 'react';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage'; 
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Page2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic2/level1/level1two/page1'); 
    };

    const handlePrevious = () => {
        navigate('/library/core-topic2/level1/level1one/page1'); 
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Accessing Formal Care Providers</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
                <ul>
                    <li>Your family physician.</li>
                    <li>Your local health authority.</li>
                    <li>Your local Alzheimer Society.</li>
                    <li>Your provincial information and referral services by dialing 211 on your telephone.</li>
                    <li>Your family, friends, and neighbors.</li>
                    <li>Community organizations.</li>
                    <li>Veterans Affairs Canada (if the person living with dementia is a veteran).</li>
                    <li>You may also try an internet search including key terms such as: "city/town you live in", "home support", "home care", "respite" or "adult day programs".</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
