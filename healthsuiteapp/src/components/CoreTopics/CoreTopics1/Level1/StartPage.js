import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Link, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../../apicall/UpdateLibraryLastPage'; 
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const StartingPage = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handlePrevious = () => {
        // Placeholder function, update with the actual navigation logic
        navigate('/library/core-topic1');
    };

    const handleNext = () => {
        // Placeholder function, update with the actual navigation logic
        navigate('/library/core-topic1/level1/level1one/page1');
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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#F7FAFC', // Light background color as per your design
                padding: 3,
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
                <Typography ref={pageTitleRef} variant="h2" sx={{ fontSize: '2.5rem', color: '#007FFF', textAlign: 'center', py: 2 }}>
                    Level 1: Taking a Break from Caregiving
                </Typography>
                <Typography variant="h3" sx={{ backgroundColor: '#007FFF', color: 'white', textAlign: 'center', fontSize: '1.5rem', py: 1 }}>
                    Taking a Break from Caregiving
                </Typography>
                <Typography variant="body1" sx={{ color: '#333', mt: 2 }}>
                    <strong>Page 1 of 1 (CONTENT)</strong>
                </Typography>
                <ul sx={{ listStyle: 'none', pl: 0 }}>
                    <li sx={{ mt: 1, color: '#333' }}>
                        Although caring for persons with dementia is rewarding, you may feel you need to take a break from your caregiving responsibilities at times.
                    </li>
                    <li sx={{ color: '#333' }}>
                        Taking regular breaks from your caregiver responsibilities is good for both your physical and emotional well-being.
                    </li>
                    <li sx={{ color: '#333' }}>
                        Your health is just as important as the person you are caring for though. Remember, you cannot care for another person if you do not take care of yourself first!
                    </li>
                    <li sx={{ color: '#333' }}>
                        The following sections will provide you with information on stress and the importance of taking a break from your caregiving responsibilities.
                    </li>
                </ul>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    <strong>Reference:</strong> Alzheimer society of Canada. (2013). Alzheimer disease: Reducing caregiver stress.
                    Retrieved from <Link href="https://alzheimer.ca/sites/default/files/files/national/core-lit-brochures/reducing_caregiver_stress_e.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: '#007FFF' }}>
                        https://alzheimer.ca/sites/default/files/files/national/core-lit-brochures/reducing_caregiver_stress_e.pdf
                    </Link>, McKenzie, R. (2019).
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

export default StartingPage;
