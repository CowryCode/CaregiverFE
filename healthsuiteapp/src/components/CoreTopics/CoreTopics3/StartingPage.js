import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../apicall/UpdateLibraryLastPage';

const StartingPage = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/library/core-topic3/level1'); // Adjust this path to navigate to the next relevant content or section
    };

    // const handlePrevious = () => {
    //     navigate('/previous-section-path'); // Set this to navigate back to the main menu or previous section
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
            <Typography variant="h3" sx={{ color: 'red', textAlign: 'center', mb: 1 }}>Core Topic 3</Typography>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', bgcolor: '#007FFF', color: 'white', p: 1 }}>Supporting the Person Living with Dementia</Typography>
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>As their disease progresses, persons living with dementia will experience changes in the way they process and respond to their social and physical environments.</li>
                    <li>This means they will need more assistance with their care and supervision to support their quality of life.</li>
                    <li>As a caregiver, you may be caring for a person from a distance or considering asking them to move in with you which can be challenging for you and the person you are supporting.</li>
                    <li>Developing an understanding of the meaning behind behaviors is essential to their well-being and yours.</li>
                    <li>The following sections will provide you with information on various living situations and commonly occurring behaviors experienced by persons with dementia.</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" disabled>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;
