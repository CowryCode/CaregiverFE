import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Link } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';

const Page1 = () => {
    const navigate = useNavigate();

    const handlePrevious = () => {
        // Placeholder function, update with the actual navigation logic
        navigate('/library/core-topic1/level1');
    };

    const handleNext = () => {
        // Placeholder function, update with the actual navigation logic
        navigate('/library/core-topic1/level1/level1Two/page1');
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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#F7FAFC', // Consistent light background color
                padding: 3,
                boxSizing: 'border-box'
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Typography variant="h2" sx={{ fontSize: '2rem', color: '#007FFF', textAlign: 'center', mb: 2 }}>
                    Level 1.1: What is Stress?
                </Typography>
                <Typography variant="body1" sx={{ color: '#333', mt: 2 }}>
                    <strong>Page 1 of 1 (Scroll/Paginate) (CONTENT)</strong>
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Stress is a common experience for caregivers of persons living with dementia.
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Stress may be caused by:
                </Typography>
                <ul sx={{ listStyle: 'disc', pl: 4 }}>
                    <li>A lack of understanding about dementia and how it changes over time.</li>
                    <li>Feeling isolated, alone, and unsupported.</li>
                    <li>Having more responsibilities.</li>
                    <li>Changes in the person with dementia’s behaviour.</li>
                    <li>Financial strain.</li>
                    <li>Conflict with your family, friends, healthcare providers, or employer.</li>
                    <li>Concerns about what will happen to the person with dementia if you can no longer care for them.</li>
                </ul>
                <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                    (Word count: 59)
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, py: 1 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography>Page 1</Typography>
                <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: '#007FFF' }}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
