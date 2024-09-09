import React, {useEffect , useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page2 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic1/level3/level3two/page3'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3two/page1'); // Adjust this path based on your routing structure
    };

    useEffect(() => {
        savePageUrl();
        setIsBookmarked(bookmarkedAlready);
      }, [isBookmarked]);
    
      const { successful, savePageUrl,bookmarkPageUrl, bookmarkedAlready } = UpdateLibraryLastPage({
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
            <Box>
                <Typography ref={pageTitleRef} variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 3.2: Anxiety</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
                <Typography sx={{ mb: 2 }}>Symptoms of anxiety include:</Typography>
                <ul>
                    <li>Difficulty concentrating.</li>
                    <li>Excessive worrying.</li>
                    <li>Restlessness.</li>
                    <li>Tightness in your chest and/or throat.</li>
                    <li>Shortness of breath or difficulty breathing.</li>
                    <li>Feeling unsettled or uneasy.</li>
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
