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

const CoreTopics1_Level3_Level3Five_Page3 = () => {
    
    const pageId = 'CoreTopics1_Level3_Level3Five_Page3'; // Unique identifier for this page
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 3.5: Journaling</Typography>
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
                                    <li>Setting aside time to journal every day or every few days.</li>
                                    <li>Keeping a pen and paper handy.</li>
                                    <li>Writing whatever comes to mind and feels right.</li>
                                    <li>Journaling about what is or isn’t working for you.</li>
                                    <li>Sharing your concerns with others.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Feeling guilty about what you are journaling.</li>
                                    <li>Worrying about spelling mistakes.</li>
                                    <li>Worrying about what others would think.</li>
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

export default CoreTopics1_Level3_Level3Five_Page3
