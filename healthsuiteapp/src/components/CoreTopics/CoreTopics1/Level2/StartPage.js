import React, {useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../../apicall/UpdateLibraryLastPage'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const StartingPage = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handlePrevious = () => {
        navigate('/library/core-topic1/level1/level1Two/page3'); // Adjust the path according to your routing structure
    };

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2one/page1'); // Adjust the path according to your routing structure
    };

    useEffect(() => {
        savePageUrl();
        setIsBookmarked(bookmarkedAlready);
      }, [isBookmarked]);
    
      const { successful, savePageUrl,bookmarkPageUrl, bookmarkedAlready  } = UpdateLibraryLastPage({
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
            justifyContent: 'space-between',
            bgcolor: '#f3f3f3' // Adds background color similar to your image, adjust as necessary
        }}>
            <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>

            <Box sx={{ width: '100%', bgcolor: '#007FFF', color: 'white', p: 1 }}>
                <Typography   ref={pageTitleRef}  variant="h5" sx={{ textAlign: 'center' }}>Physical Well-Being</Typography>
            </Box>
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Level 2: Physical Well-Being</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>As a caregiver of a person with dementia, it may be difficult to find time to exercise or prepare meals for yourself.</li>
                    <li>You may also experience sleep disturbances or changes in your sleeping pattern.</li>
                    <li>Changes in your exercise routine, diet and sleeping habits can impact your physical well-being.</li>
                    <li>The following sections will provide you with information on exercise, nutrition, and sleep disturbances.</li>
                </ul>
                <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>(Word count: 92)</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default StartingPage;
