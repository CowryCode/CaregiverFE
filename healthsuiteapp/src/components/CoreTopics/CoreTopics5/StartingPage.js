import React, {useEffect,useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const StartingPage = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic5/level1'); // Adjust this path based on your routing structure
    };

    // const handlePrevious = () => {
    //     navigate('/previous-topic-page'); // Adjust this path to the previous page
    // };

    useEffect(() => {
        savePageUrl();
        setIsBookmarked(bookmarkedAlready);
    }, [isBookmarked]);
    
    const { successful, savePageUrl ,bookmarkPageUrl, bookmarkedAlready} = UpdateLibraryLastPage({
          setLoading: (loading) => console.log(`Loading: ${loading}`),
          handleLibraryClick: (data) => {
              console.log('Library Clicked:', data);
          },
    });

    function handleBookmark(){
        if(isBookmarked){
            console.log('This page have been bookmarked already.');
            alert("This page have been bookmarked already.");
        }else{
            if (pageTitleRef.current) {
                const pageTitle = pageTitleRef.current.textContent.trim();
                bookmarkPageUrl(pageTitle);
                setIsBookmarked(true);
                alert("Bookmarked successfully.");
            }
        }
    }


    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>
            <Typography ref={pageTitleRef} variant="h4" sx={{ mb: 1, textAlign: 'center', color: 'red' }}>CORE TOPIC 5</Typography>
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
