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

const CoreTopics2_Level3_Level3One_Page1 = () => {
    const pageId = 'CoreTopics2_Level3_Level3One_Page1'; // Unique identifier for this page
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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 3.1: Tips for Asking for Support</Typography>
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
                                    <li>Making a prioritized list of the things you need help with.</li>
                                    <li>Arrange a time to meet with family and friends to discuss your needs.</li>
                                    <li>Be specific and clear about what you need help with. Use “I” statements: “I need help with...”</li>
                                    <li>Asking your family and friends what they are comfortable helping with.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Using “you” statements: “You need to help with...”</li>
                                    <li>Saying hurtful things to your family or friends out of anger or frustration.</li>
                                    <li>Feeling guilty about asking for help.</li>
                                    <li>Feeling like you are burdening others by asking for help.</li>
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
}

export default CoreTopics2_Level3_Level3One_Page1
