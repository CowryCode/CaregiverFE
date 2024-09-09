import React, {useEffect, useRef, useState} from 'react';
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
        navigate('/library/core-topic1/level3/level3five/page2'); // Adjust this path based on your routing structure
    };

    const handlePrevious = () => {
        navigate('/library/core-topic1/level3/level3four/page2'); // Adjust this path based on where it should go back to
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
                <Typography ref={pageTitleRef} variant="h5" sx={{ mb: 1, textAlign: 'center', bgcolor: '#007FFF', color: 'white', p: 1 }}>Journaling</Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
                <ul>
                    <li>Caregivers of those with dementia may struggle to discuss their emotions openly.</li>
                    <li>Journaling offers a private outlet to explore fears and concerns.</li>
                    <li>Journals can remain private or be shared.</li>
                    <li>Journaling provides a flexible medium, whether a physical book or digital file.</li>
                </ul>
                <Typography sx={{ mt: 2, fontSize: '0.875rem' }}>
                    Reference: Ballas, P., & Fraser, M. for University of Rochester Medical Center. Journaling for mental health. Retrieved from https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1
                </Typography>
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
