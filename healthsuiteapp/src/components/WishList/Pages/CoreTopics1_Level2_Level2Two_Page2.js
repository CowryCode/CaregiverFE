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
  
const CoreTopics1_Level2_Level2Two_Page2 = () => {
    const pageId = 'CoreTopics1_Level2_Level2Two_Page2';
    const [isBookmarked, setIsBookmarked] = useState(false);
  
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
            <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.2: Nutrition</Typography>
            <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
        </Box>
        <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 2 of 2</Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{ width: '50%', verticalAlign: 'top', borderRight: '2px solid black' }}>
                            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                            <ul>
                                <li>Preparing easy, healthy snacks ahead of time: carrot sticks, celery sticks, hard-boiled eggs, fresh-cut fruit, etc.</li>
                                <li>Purchasing easy, healthy snacks: fresh fruit, yogurt cups, fruit cups, granola bars, muffins, etc.</li>
                                <li>Eating smaller portions of food throughout the day.</li>
                                <li>Eating meals with a person with dementia.</li>
                                <li>Simplifying meal preparation: instant mashed potatoes, instant oatmeal, soups, etc.</li>
                                <li>Cooking meals in a slow cooker.</li>
                                <li>Making large batches of food and freezing portions for later: chili, spaghetti sauce, lasagna, soup, etc.</li>
                            </ul>
                        </TableCell>
                        <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                            <ul>
                                <li>Skipping meals: skipping meals makes it difficult to get the vitamins and nutrients you need.</li>
                                <li>Eating foods that are high in calories, saturated fat, sugars, or salt.</li>
                                <li>Eating foods that are high in sugar or a heavy meal before bed.</li>
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

export default CoreTopics1_Level2_Level2Two_Page2
