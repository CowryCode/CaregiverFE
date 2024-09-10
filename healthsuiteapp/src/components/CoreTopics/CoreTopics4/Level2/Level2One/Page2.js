import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem, TableContainer, Paper, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page2 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handlePrevious = () => {
        navigate('/library/core-topic4/level2/level2one/page1'); // Adjust this path to point to the previous page
    };

    const handleNext = () => {
        navigate('/library/core-topic4/level2/level2two/page1'); // Adjust this path to point to the next page, if exists
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
            justifyContent: 'space-between',
            backgroundColor: '#f3f3f3' // Adjust the background color as needed
        }}>
             <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>
            <Typography ref={pageTitleRef} variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.1: Changes in Communication</Typography>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 2</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1, padding: 2 }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: 2 }}>Persons living with dementia may:</Typography>
                <List>
                    <ListItem>Repeat familiar words.</ListItem>
                    <ListItem>Have difficulty finding the appropriate words.</ListItem>
                    <ListItem>Speak less often.</ListItem>
                    <ListItem>Use gestures to communicate instead of words.</ListItem>
                    <ListItem>Revert to communicating in their native language.</ListItem>
                    <ListItem>Experience difficulty organizing words.</ListItem>
                    <ListItem>Lose their train of thought.</ListItem>
                    <ListItem>Describe familiar objects instead of calling them by name.</ListItem>
                </List>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
