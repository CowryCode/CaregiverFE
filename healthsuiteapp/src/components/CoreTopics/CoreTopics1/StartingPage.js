import React, {useEffect, useRef, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { Box, Button, Typography, Link, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';


const StartingPage = () => {
    
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    

    useEffect(() => {
        savePageUrl();
        setIsBookmarked(bookmarkedAlready);
    }, [isBookmarked]);

    const { successful, savePageUrl, bookmarkPageUrl , bookmarkedAlready} = UpdateLibraryLastPage({
        setLoading: (loading) => console.log(`Loading: ${loading}`),
        handleLibraryClick: (data) => {
            console.log('Library Clicked:', data);
        },
    });

    const handleNext = () => {
        navigate('/library/core-topic1/level1');
    };

    function handleBookmark(){
        if(isBookmarked){
            console.log('This page have been bookmarked already.');
            alert("This page have been bookmarked already.");
        }else{
            if (pageTitleRef.current) {
                const pageTitle = pageTitleRef.current.textContent.trim();
                bookmarkPageUrl(pageTitle);
                alert("Bookmarked successfully.");
            }
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100vh',
                backgroundColor: '#F7FAFC', // Lighter background
                p: 3,
                boxSizing: 'border-box'
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>

            <Box sx={{ flex: 1 }}>
                <Typography ref={pageTitleRef}  variant="h2" sx={{ fontSize: '2.5rem', color: '#007FFF', textAlign: 'center', py: 2 }}>
                    {/* Core Topic 1: Taking Care of Yourself (Self-care) */}
                    Core Topic: Taking Care of Yourself (Self-care)
                </Typography>
                <Typography variant="h3" sx={{ backgroundColor: '#007FFF', color: 'white', textAlign: 'center', fontSize: '1.5rem', py: 1 }}>
                    Taking Care of Yourself
                </Typography>
                <Typography variant="body1" sx={{ color: '#333', mt: 2 }}> 
                    <strong>Page 1 of 1 (CONTENT)</strong>
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}> 
                    Being a caregiver for someone with dementia can leave little time for yourself, but self-care is crucial.
                    Regular breaks improve your well-being, so prioritize activities you enjoy and socializing with loved ones.
                    The following sections will explore maintaining your physical, emotional, and social health,
                    emphasizing the importance of taking breaks from caregiving.
                </Typography>
                <Typography variant="body1">
                    <strong>Reference:</strong> Alzheimer society of Canada. (2013). Alzheimer disease: Reducing caregiver stress.
                    Retrieved from <Link href="https://alzheimer.ca/sites/default/files/files/national/core-lit-brochures/reducing_caregiver_stress_e.pdf" target="_blank" rel="noopener noreferrer">
                        https://alzheimer.ca/sites/default/files/files/national/core-lit-brochures/reducing_caregiver_stress_e.pdf
                    </Link>, McKenzie, R. (2019).
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, py: 1 }}> 
                <Button variant="contained" disabled>Previous</Button>
                <Typography variant="body1">Page 1</Typography>
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;
