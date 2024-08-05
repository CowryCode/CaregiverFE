import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../../utils/localStorageHelpers";
const CoreTopics3_Level2_Level2Three_Page3 = () => {
  const pageId = "CoreTopics3_Level2_Level2Three_Page3"; // Unique identifier for this page
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
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 1, textAlign: "center", color: "#007FFF" }}
        >
          Level 2.3: Having Difficulty Sleeping
        </Typography>
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
                                    <li>Maintaining the person's normal sleeping and eating patterns.</li>
                                    <li>Providing engaging activities throughout the day and spending time in the sun.</li>
                                    <li>Reminding the person that it is late and redirecting them back to bed.</li>
                                    <li>Keeping the bedroom dark at night and reducing noise levels.</li>
                                    <li>Journaling to track sleeping habits or trends.</li>
                                    <li>Checking whether incontinence aids fit properly and are appropriate for nighttime use.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Providing the person with large meals before bed.</li>
                                    <li>Permitting the person to nap in the afternoon.</li>
                                    <li>Permitting the person to nap longer than one hour.</li>
                                    <li>Having upsetting conversations with the person in the evenings.</li>
                                    <li>Providing the person with caffeine, liquid and alcohol intake before bedtime.</li>
                                    <li>Allowing the person to lie in bed awake at night. If they can’t sleep, redirect them to a chair or the couch.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

      <Typography
        sx={{ mt: 2, mb: 2, fontSize: "0.875rem", textAlign: "center" }}
      ></Typography>
    </Box>
  );
};

export default CoreTopics3_Level2_Level2Three_Page3;
