import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    IconButton
  } from '@mui/material';
  import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
  import BookmarkIcon from '@mui/icons-material/Bookmark';
  import { addToWishlist, removeFromWishlist, getWishlist } from '../../../utils/localStorageHelpers';
const CoreTopics1_Level3_Level3One_Page3 = () => {
    const pageId = 'CoreTopics1_Level3_Level3One_Page3'; // Unique identifier for this page
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Check if the page is in the wishlist on component mount and update state
    useEffect(() => {
        const wishlist = getWishlist();
        setIsBookmarked(wishlist.includes(pageId));
    }, []);


    const handleBookmark = () => {
        if (isBookmarked) {
            removeFromWishlist(pageId);
            setIsBookmarked(false);
        } else {
            addToWishlist(pageId);
            setIsBookmarked(true);
        }
    };

    return (
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            backgroundColor: '#f3f3f3' // Adjust the background color as needed
        }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 3.1: Depression</Typography>
                <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                    {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
            </Box>
            <TableContainer component={Paper} sx={{ boxShadow: 1, marginBottom: 2 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Spending time with friends or family.</li>
                                    <li>Asking family or friends for help.</li>
                                    <li>Accessing support networks/groups.</li>
                                    <li>Accessing formal care providers.</li>
                                    <li>Adding exercise to your daily routine.</li>
                                    <li>Setting time aside for the activities you enjoy.</li>
                                    <li>Getting enough sleep every night.</li>
                                    <li>Speaking with your family physician if symptoms persist.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Expecting your mood to improve quickly.</li>
                                    <li>Isolating yourself from friends and family.</li>
                                    <li>Making important decisions until your depression has alleviated.</li>
                                    <li>Dwelling on negative thoughts.</li>
                                    <li>Drinking alcohol or using drugs; this can worsen your depression.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={{ mt: 2, mb: 2, fontSize: '0.875rem', textAlign: 'center' }}>
                
            </Typography>
            
        </Box>
    );
}

export default CoreTopics1_Level3_Level3One_Page3
