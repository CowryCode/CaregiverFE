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
const CoreTopics3_Level2_Level2Four_Page3 = () => {
  const pageId = "CoreTopics3_Level2_Level2Four_Page3"; // Unique identifier for this page
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
          Level 2.4: Walking and Pacing
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
                  <li>Determining what the person is trying to express.</li>
                  <li>Determining why the person wants to go home.</li>
                  <li>Distracting the person with an activity.</li>
                  <li>
                    Removing objects from the environment that may remind the
                    person to go home, such as shoes, jackets, purses, etc.
                  </li>
                  <li>Reassuring the person.</li>
                  <li>
                    Giving the person an incentive to stay, such as a cup of
                    coffee or a snack.
                  </li>
                  <li>Providing a safe space for wandering or pacing.</li>
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
                  <li>
                    Contradicting the person and their wish to go home or find
                    someone.
                  </li>
                  <li>Prohibiting them from wandering or pacing.</li>
                  <li>
                    Overstimulating environments such as clutter, noise, large
                    groups of people, etc.
                  </li>
                  <li>Using a loud voice.</li>
                  <li>Being authoritative.</li>
                  <li>Rushing the person.</li>
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

export default CoreTopics3_Level2_Level2Four_Page3;
