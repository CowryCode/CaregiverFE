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

const CoreTopics3_Level2_Level2Five_Page3 = () => {
  const pageId = "CoreTopics3_Level2_Level2Five_Page3"; // Unique identifier for this page
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
        backgroundColor: "#f3f3f3", // Adjust the background color as needed
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
          Level 2.5: Express Comments/Gestures That May be Offensive
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
                                    <li>Ignoring insults or gestures.</li>
                                    <li>Identifying stressors and triggers for inappropriate behaviours.</li>
                                    <li>Using firm, but gentle communication.</li>
                                    <li>Reassuring the person.</li>
                                    <li>Encouraging participation in activities that occupy the person’s hands, such as folding laundry, playing cards, etc.</li>
                                    <li>Redirecting the person to a private place as needed.</li>
                                    <li>Redirecting them to their room or a private space.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Arguing or debating with the person.</li>
                                    <li>Shaming the person for their behaviour or actions.</li>
                                    <li>Overreacting as this may lead to feelings of shame.</li>
                                    <li>Restraining the person.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Typography
        sx={{ mt: 2, mb: 2, fontSize: "0.875rem", textAlign: "center" }}
      ></Typography>          
      </Box>
    </Box>
  );
};

export default CoreTopics3_Level2_Level2Five_Page3;
