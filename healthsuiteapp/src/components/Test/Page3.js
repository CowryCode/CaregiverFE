import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../utils/localStorageHelpers.js";

const Page3 = () => {
  const navigate = useNavigate();
  const pageId = "CoreTopics1_Level1_Level1Two_Page3";
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  useEffect(() => {
    const wishlist = getWishlist();
    setIsBookmarked(wishlist.includes(pageId));
  }, []);

  const handlePrevious = () => {
    navigate("/library/core-topic1/level1/level1Two/page2");
  };

  const handleNext = () => {
    navigate("/library/core-topic1/level2");
  };

  const handleBookmark = () => {
    if (isBookmarked) {
      removeFromWishlist(pageId);
      setIsBookmarked(false);
      setDialogContent("You have successfully removed from Quick Tips");
    } else {
      addToWishlist(pageId);
      setIsBookmarked(true);
      setDialogContent("You have successfully saved to Quick Tips");
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
          variant="h2"
          sx={{
            mb: 2,
            fontSize: "1.5rem",
            color: "#007FFF",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          Level 1.2: Taking a Break from Caregiving
        </Typography>
        <Tooltip title={isBookmarked ? "Remove from Quick Tips" : "Click to save on Quick Tips"}>
          <IconButton onClick={handleBookmark} aria-label={isBookmarked ? "Remove from wishlist" : "Add to wishlist"}>
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <Typography
        variant="h3"
        sx={{ mb: 1, fontSize: "1.25rem", textAlign: "center" }}
      >
        Page 3 of 3
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 1, marginBottom: 2 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Try
                </Typography>
                <ul>
                  <li>
                    Walking away from the situation for 5-10 minutes if it is
                    safe to do so.
                  </li>
                  <li>Taking a few slow, deep breaths.</li>
                  <li>Acknowledging how and what you are feeling.</li>
                  <li>
                    Sharing your feelings and frustrations with others and
                    asking for help.
                  </li>
                  <li>Accessing formal support or joining a support group.</li>
                  <li>
                    Reflect on what makes you happy; try to find ways to engage
                    in those activities.
                  </li>
                  <li>Speaking with your family physician.</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ verticalAlign: "top" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Avoid
                </Typography>
                <ul>
                  <li>Isolating yourself from others.</li>
                  <li>
                    Feeling guilty about asking for or accepting help from
                    others.
                  </li>
                  <li>Feeling guilty about taking time for yourself.</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ mt: 2, fontSize: "0.875rem", textAlign: "center" }}>
        (Word count: 68)
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Typography sx={{ fontSize: "0.875rem", alignSelf: "center" }}>
          Page 3
        </Typography>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
      {/* Dialog for showing bookmark addition or removal confirmation */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{
          '& .MuiDialog-container': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '& .MuiPaper-root': {
            minWidth: '300px', // Adjust the width of the dialog
            borderRadius: '16px', // Rounded corners for the dialog
          }
        }}
      >
        <DialogContent sx={{ textAlign: 'center' }}>
          <DialogContentText sx={{ fontSize: '1.1rem', padding: '24px' }}>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '16px' }}>
          <Button onClick={handleCloseDialog} variant="contained" sx={{ minWidth: '90px', borderRadius: '20px' }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Page3;
