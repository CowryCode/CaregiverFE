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

const CoreTopics3_Level1_Level1Two_Page3 = () => {
  const pageId = "CoreTopics3_Level1_Level1Two_Page3"; // Unique identifier for this page
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
          Level 1.2: Living with the Person with Dementia
        </Typography>
        <IconButton onClick={handleBookmark} aria-label="add to wishlist">
          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 1, marginBottom: 2 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                >
                  Try
                </Typography>
                <ul>
                  <li>Being honest and open with the person about the move.</li>
                  <li>
                    Moving the person at a time of day when they are at their
                    “best”.
                  </li>
                  <li>
                    Ensuring the person has their bedroom and private space.
                  </li>
                  <li>Maintaining the person’s daily habits and routines.</li>
                  <li>
                    Bringing familiar objects such as familiar decorations,
                    pictures etc.
                  </li>
                  <li>
                    Putting up signs in your home to help the person find their
                    way around.
                  </li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                >
                  Avoid
                </Typography>
                <ul>
                  <li>
                    Moving the person when they are ill or medically unstable.
                  </li>
                  <li>Tricking the person or lying to them about the move.</li>
                  <li>
                    Becoming frustrated or angry with the person if they are
                    finding the move stressful.
                  </li>
                  <li>
                    Making too many changes to a person’s daily routine can be
                    confusing and stressful.
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

export default CoreTopics3_Level1_Level1Two_Page3;
