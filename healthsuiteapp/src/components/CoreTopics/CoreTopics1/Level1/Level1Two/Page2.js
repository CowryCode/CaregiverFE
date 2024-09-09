import React, {useEffect , useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, IconButton } from "@mui/material";
import UpdateLibraryLastPage from "../../../../../apicall/UpdateLibraryLastPage";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page2 = () => {
  const navigate = useNavigate();
  const pageTitleRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handlePrevious = () => {
    navigate("/library/core-topic1/level1/level1Two/page1");
  };

  const handleNext = () => {
    navigate("/library/core-topic1/level1/level1Two/page3");
  };

    useEffect(() => {
        savePageUrl();
        setIsBookmarked(bookmarkedAlready);
      }, [isBookmarked]);

    const { successful, savePageUrl,bookmarkPageUrl, bookmarkedAlready } = UpdateLibraryLastPage({
        setLoading: (loading) => console.log(`Loading: ${loading}`),
        handleLibraryClick: (data) => {
            console.log('Library Clicked:', data);
        },
    });

    function handleBookmark(){
      if(isBookmarked){
          console.log('This page have been bookmarked already.');
          alert("This page have been bookmarked already.");
      }else{
          if (pageTitleRef.current) {
              const pageTitle = pageTitleRef.current.textContent.trim();
              bookmarkPageUrl(pageTitle);
              setIsBookmarked(true);
              alert("Bookmarked successfully.");
          }
      }
    }

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>
      <Box>
        <Typography ref={pageTitleRef}
          variant="h2"
          sx={{
            mb: 2,
            fontSize: "1.5rem",
            color: "#007FFF",
            textAlign: "center",
          }}
        >
          Level 1.2: Taking a Break from Caregiving
        </Typography>
        <Typography variant="h3" sx={{ mb: 1, fontSize: "1.25rem" }}>
          Page 2 of 2
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Some signs that you may need a break from caregiving include:
        </Typography>
        <ul sx={{ pl: 2 }}>
          <li>Withdrawing from your family and friends.</li>
          <li>Losing interest in hobbies or activities that you enjoy.</li>
          <li>Experiencing changes in weight, appetite, or both.</li>
          <li>Feeling physically or emotionally exhausted.</li>
        </ul>
        <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
          (Word count: 76)
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="contained" onClick={handlePrevious}>
          Previous
        </Button>
        <Typography sx={{ fontSize: "0.875rem" }}>Page 2</Typography>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Page2;
