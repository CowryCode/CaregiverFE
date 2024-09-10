import React, {useEffect,useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, IconButton} from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page3 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4/level4two/page2');
    };

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4three/page1')
    }

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
            <Typography ref={pageTitleRef} variant="h5" sx={{ mb: 2 }}>Level 4.2: Going to the Doctor</Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>After the doctor's appointment:</Typography>
            <ul>
                <li>Fill prescriptions at the pharmacy and ask about new medications.</li>
                <li>Schedule any ordered tests.</li>
                <li>Record appointment dates in your calendar.</li>
                <li>Inform the family about the appointment if needed.</li>
                <li>Update the person's home medical records.</li>
                <li>Discuss the appointment with the person and address their questions or feelings.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 3 of 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page3;
