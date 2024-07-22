import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { addToWishlist, removeFromWishlist, getWishlist } from '../../../utils/localStorageHelpers';

const CoreTopics1_Level1_Level1Two_Page3 = () => {
  // const navigate = useNavigate();
  const pageId = 'CoreTopics1_Level1_Level1Two_Page3';
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
    <Box
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f3',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: '1.5rem',
            color: '#007FFF',
            textAlign: 'center',
            flexGrow: 1,
          }}
        >
          Level 1.2: Taking a Break from Caregiving
        </Typography>
        <IconButton onClick={handleBookmark} aria-label="add to wishlist">
          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      
      <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: '50%',
                  verticalAlign: 'top',
                  borderRight: '2px solid black',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  Try
                </Typography>
                <ul>
                  <li>Walking away from the situation for 5-10 minutes if it is safe to do so.</li>
                  <li>Taking a few slow, deep breaths.</li>
                  <li>Acknowledging how and what you are feeling.</li>
                  <li>Sharing your feelings and frustrations with others and asking for help.</li>
                  <li>Accessing formal support or joining a support group.</li>
                  <li>Reflect on what makes you happy; try to find ways to engage in those activities.</li>
                  <li>Speaking with your family physician.</li>
                </ul>
              </TableCell>
              <TableCell sx={{ width: '50%', verticalAlign: 'top' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  Avoid
                </Typography>
                <ul>
                  <li>Isolating yourself from others.</li>
                  <li>Feeling guilty about asking for or accepting help from others.</li>
                  <li>Feeling guilty about taking time for yourself.</li>
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

export default CoreTopics1_Level1_Level1Two_Page3;
