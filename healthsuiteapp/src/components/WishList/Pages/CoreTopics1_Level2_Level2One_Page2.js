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

const CoreTopics1_Level2_Level2One_Page2 = () => {
  const pageId = 'CoreTopics1_Level2_Level2One_Page2';
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
      backgroundColor: '#f3f3f3'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h2" sx={{
          mb: 2,
          fontSize: '1.5rem',
          color: '#007FFF',
          textAlign: 'center',
          flexGrow: 1
        }}>
          Level 2.1: Exercise
        </Typography>
        <IconButton onClick={handleBookmark} aria-label="add to wishlist">
          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{
                width: '50%',
                verticalAlign: 'top',
                borderRight: '2px solid black'
              }}>
                <Typography variant="h6" sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'black'
                }}>
                  Try
                </Typography>
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
              <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                <Typography variant="h6" sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'black'
                }}>
                  Avoid
                </Typography>
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
      <Typography sx={{ mt: 2, fontSize: '0.875rem', textAlign: 'center' }}>
        
      </Typography>
    </Box>
  );
};

export default CoreTopics1_Level2_Level2One_Page2;
