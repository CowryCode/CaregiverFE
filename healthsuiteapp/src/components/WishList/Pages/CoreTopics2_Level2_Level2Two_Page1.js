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
const CoreTopics2_Level2_Level2Two_Page1 = () => {
  const pageId = "CoreTopics2_Level2_Level2Two_Page1"; // Unique identifier for this page
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
          Level 2.2: Accessing Support Networks and Groups
        </Typography>
        <IconButton onClick={handleBookmark} aria-label="add to wishlist">
          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
        Page 1 of 1
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: "50%",
                  verticalAlign: "top",
                  borderRight: "2px solid black",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                >
                  Try
                </Typography>
                <ul>
                  <li>
                    Making a list of what it is you wish to share or discuss.
                  </li>
                  <li>Sharing a meaningful entry from your journal.</li>
                  <li>Sharing your experiences as a caregiver.</li>
                  <li>Being honest with those you are speaking to.</li>
                  <li>
                    Listening to the experiences of others and being
                    open-minded.
                  </li>
                  <li>
                    Asking questions; everyone’s caregiving experiences are
                    different.
                  </li>
                </ul>
              </TableCell>
              <TableCell sx={{ width: "50%", verticalAlign: "top" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                >
                  Avoid
                </Typography>
                <ul>
                  <li>Internalizing your feelings.</li>
                  <li>Blaming yourself for how you are feeling.</li>
                  <li>Feeling guilty about opening up to others.</li>
                  <li>
                    Casting judgment on others when they speak or share their
                    own experiences.
                  </li>
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

export default CoreTopics2_Level2_Level2Two_Page1;
