import React, {useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page1 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2one/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2'); // Adjust this path based on your routing structure
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
            justifyContent: 'space-between' // Ensures that pagination sticks to the bottom
        }}>
             <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 1 }}>  
                <Typography ref={pageTitleRef} variant="h4" sx={{ mb: 2, textAlign: 'center' }}>Level 2.1: Exercise</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
                <ul>
                    <li>Caregiving for someone with dementia can make finding time to exercise challenging.</li>
                    <li>Prioritize your health; exercise can enhance physical and emotional well-being.</li>
                    <li>Exercise may alleviate symptoms of depression or anxiety.</li>
                    <li>Consistent short daily exercise is more beneficial than sporadic longer sessions.</li>
                    <li>Consult your doctor before starting any exercise routine.</li>
                </ul>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2
            }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
