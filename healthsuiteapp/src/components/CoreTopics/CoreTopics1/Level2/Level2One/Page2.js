import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; // For a filled bookmark icon
import { addToWishlist, removeFromWishlist, getWishlist } from '../../../../../utils/localStorageHelpers.js';
import UpdateLibraryLastPage from "../../../../../apicall/UpdateLibraryLastPage.js"; 
import Tooltip from '@mui/material/Tooltip';

const Page2 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const pageId = 'CoreTopics1_Level2_Level2One_Page2'; // Unique identifier for this page
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const wishlist = getWishlist();
        setIsBookmarked(wishlist.includes(pageId));
    }, []);

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2one/page1'); 
    };

    const handleNext = () => {
        navigate('/library/core-topic1/level2/level2two/page1'); 
    };

    const handleBookmark = () => {
        if (isBookmarked) {
            removeFromWishlist(pageId);
            setIsBookmarked(false);
        } else {
            addToWishlist(pageId);
            setIsBookmarked(true);
        }
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

   

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: '#f3f3f3' 
        }}>
           
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography ref={pageTitleRef} variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.1: Exercise</Typography>
                <Tooltip title="Add to QuickTips">
                <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                    {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
                </Tooltip>
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 2</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1, marginBottom: 2 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Setting aside scheduled time to exercise.</li>
                                    <li>Doing stretches or watching an exercise video while the person is resting.</li>
                                    <li>Being active with the person you are caring for.</li>
                                    <li>Sharing your caregiving responsibilities with family or friends.</li>
                                    <li>Accessing formal supports such as adult day programs or companionship.</li>
                                    <li>Signing up for a weekly exercise class at your local recreation or community center.</li>
                                    <li>Exercising with a friend.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Feeling guilty if you are having difficulty finding time to exercise.</li>
                                    <li>Pushing yourself too hard when you exercise; can increase your risk of straining muscles or harming yourself.</li>
                                    <li>Activities that will leave you feeling sore and exhausted afterward.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                Reference: National Institute on Aging (n.d.). Caregivers and exercise- take time for yourself. Retrieved from https://go4life.nia.nih.gov/caregivers-and-exercise-take-time-for-yourself/; Macdonald, D. (2019 January 18). Personal communication; McKenzie, R. (2109).
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
