import React, {useEffect,useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography , IconButton} from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page1 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4two/page2');
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4/level4one/page2');
    };

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
            <Typography ref={pageTitleRef}  variant="h5" sx={{ mb: 2 }}>Level 4.2: Going to the Doctor</Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>Before going to a doctor's appointment:</Typography>
            <ul>
                <li>List current medications and bring them or blister packs.</li>
                <li>Organize necessary documents and medical history.</li>
                <li>List questions for the doctor.</li>
                <li>Check if the doctor's office is on schedule.</li>
                <li>Ensure the person wears easy-to-remove clothing for an exam.</li>
                <li>Inform the person about the appointment and arrange transportation if needed.</li>
            </ul>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1 of 3</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
