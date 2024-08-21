import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page1 = () => {
    const navigate = useNavigate();
    const handlePrevious = () => {
        navigate('/library/core-topic4/level4/level4two/page3')
    }
    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4three/page2'); // Adjust this path based on your routing structure
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 4.3: Questions to Ask the Person's Doctor</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
            <ul>
                <li>Communicating with the healthcare team is essential for developing the treatment plan.</li>
                <li>Treatment goals will change as the disease progresses.</li>
                <li>Communication allows you to ask questions and learn about dementia and treatment options.</li>
          
            </ul>
            <Typography variant="h6" sx={{ mb: 2}}>When going to a doctor's appointment, consider asking:</Typography>
            <ul>
            <li>What treatment options are available?</li>
                <li>Which options best fit our situation?</li>
                <li>How long to determine treatment effectiveness?</li>
                <li>How will you assess effectiveness?</li>
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
