import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton  } from '@mui/material';
import UpdateLibraryLastPage from '../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const StartingPage = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic4/level1'); // Adjust this path based on your routing structure
    };

    // const handlePrevious = () => {
    //     navigate('/previous-topic-page'); // Adjust this path to the previous page
    // };

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
            // justifyContent: 'space-between'
        }}>
            <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>

            {/* <Typography ref={pageTitleRef} variant="h3" sx={{ mb: 1, textAlign: 'center', color: 'red' }}>CORE TOPIC 4</Typography>
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', bgcolor: 'orange' }}>Communication</Typography> */}
            <Typography ref={pageTitleRef}  variant="h2" sx={{ fontSize: '2.5rem', color: '#007FFF', textAlign: 'center', py: 2 }}>
                    Core Topic: Communication
                </Typography>
                <Typography variant="h3" sx={{ backgroundColor: '#007FFF', color: 'white', textAlign: 'center', fontSize: '1.5rem', py: 1 }}>
                    Communication
                </Typography>


            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 1</Typography>
            <ul>
                <li>With dementia progression, communication challenges arise.</li>
                <li>Understanding their needs becomes harder for caregivers.</li>
                <li>Effective communication is vital for caregivers, care providers, and physicians.</li>
                <li>The following sections will provide you with information on asking for help and how to effectively communicate with persons living with dementia, formal care providers, and physicians.</li>
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
