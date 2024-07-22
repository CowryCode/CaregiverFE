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

const CoreTopics3_Level1_Level1One_Page3 = () => {
  const pageId = "CoreTopics3_Level1_Level1One_Page3"; // Unique identifier for this page
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
          Level 1.1: Caregiving from a Distance
        </Typography>
        <IconButton onClick={handleBookmark} aria-label="add to wishlist">
          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
        Page 3 of 3
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
                  <li>Asking the primary caregiver how you can help.</li>
                  <li>
                    Finding local resources to help the primary caregiver.
                  </li>
                  <li>Arranging or helping arrange formal care services.</li>
                  <li>Visiting often for support.</li>
                  <li>Offering respite to the primary caregiver.</li>
                  <li>Helping develop a backup plan in case of emergencies.</li>
                  <li>Joining a support group.</li>
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
                  <li>Feeling guilty for living far away.</li>
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

export default CoreTopics3_Level1_Level1One_Page3;
