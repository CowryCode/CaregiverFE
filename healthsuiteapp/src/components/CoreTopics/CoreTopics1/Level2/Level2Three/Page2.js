import React, { useState, useEffect } from "react";
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
  IconButton,Tooltip
} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; // For a filled bookmark icon
import { addToWishlist, removeFromWishlist, getWishlist } from '../../../../../utils/localStorageHelpers.js';
import UpdateLibraryLastPage from "../../../../../apicall/UpdateLibraryLastPage.js"; 

const Page2 = () => {
    const navigate = useNavigate();
    const pageId = 'CoreTopics1_Level2_Level2Three_Page2'; // Unique identifier for this page
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const wishlist = getWishlist();
        setIsBookmarked(wishlist.includes(pageId));
    }, []);

    const handlePrevious = () => {
        navigate('/library/core-topic1/level2/level2three/page1'); 
    };

    const handleNext = () => {
        navigate('/library/core-topic1/level3'); // Adjust if there is a next section
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
        console.log(`Paged saved successfully : ${successful}` )
      }, []);
    
      const { successful, savePageUrl } = UpdateLibraryLastPage({
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.3: Sleep Disturbances</Typography>
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
                                    <li>Addressing some of the issues that may be keeping you or the person with dementia awake: pain, stress, anxiety, depression, need to toilet, etc.</li>
                                    <li>Redirecting the person back to bed by reminding them that it is night and time for sleep.</li>
                                    <li>Maintaining your normal sleep-wake cycle.</li>
                                    <li>Adding physical exercise to your daily routine.</li>
                                    <li>Asking family/friends for help.</li>
                                    <li>Accessing formal care services such as home care.</li>
                                    <li>Speaking with your family physician if symptoms persist.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Napping in the late afternoon and/or early evening.</li>
                                    <li>Drinking caffeine in the late afternoon and/or early evening.</li>
                                    <li>Using stimulants such as nicotine, alcohol, or caffeine.</li>
                                    <li>Watching television before bed or late at night when you or the person are awake.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                Word count: Try (84), Avoid (84)
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
