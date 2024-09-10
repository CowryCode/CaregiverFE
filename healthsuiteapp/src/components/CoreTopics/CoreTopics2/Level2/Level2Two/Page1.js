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
  IconButton,Tooltip
} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; // For a filled bookmark icon
import { addToWishlist, removeFromWishlist, getWishlist } from '../../../../../utils/localStorageHelpers.js';
import UpdateLibraryLastPage from "../../../../../apicall/UpdateLibraryLastPage.js"; 

const Page1 = () => {
    const navigate = useNavigate();
    const pageId = 'CoreTopics2_Level2_Level2Two_Page1'; // Unique identifier for this page
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
         const wishlist = getWishlist();
         setIsBookmarked(wishlist.includes(pageId));
    }, []);

    const handlePrevious = () => {
        navigate('/library/core-topic2/level2/level2one/page2'); // Adjust as needed
    };

    const handleNext = () => {
        navigate("/library/core-topic2/level3"); // Adjust if there is a next section
    };

    const handleBookmark = () => {
        if (isBookmarked) {
            removeFromWishlist(pageId);
            setIsBookmarked(false);
        } else {
            addToWishlist(pageId);
            setIsBookmarked(true);
        }
    };

    
    useEffect(() => {
        savePageUrl();
        console.log(`Paged saved successfully : ${successful}` )
      }, []);
    
    const { successful, savePageUrl,bookmarkPageUrl, bookmarkedAlready} = UpdateLibraryLastPage({
          setLoading: (loading) => console.log(`Loading: ${loading}`),
          handleLibraryClick: (data) => {
              console.log('Library Clicked:', data);
          },
    });

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
                <Typography variant="h4" sx={{ mb: 1, textAlign: 'center', color: '#007FFF' }}>Level 2.2: Accessing Support Networks and Groups</Typography>
                <Tooltip title="Add to QuickTips">
                <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                    {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
                </Tooltip>
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>Page 1 of 1</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 1, marginBottom: 2 }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Try</Typography>
                                <ul>
                                    <li>Making a list of what it is you wish to share or discuss.</li>
                                    <li>Sharing a meaningful entry from your journal.</li>
                                    <li>Sharing your experiences as a caregiver.</li>
                                    <li>Being honest with those you are speaking to.</li>
                                    <li>Listening to the experiences of others and being open-minded.</li>
                                    <li>Asking questions; everyone’s caregiving experiences are different.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ verticalAlign: 'top' }}>
                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'black' }}>Avoid</Typography>
                                <ul>
                                    <li>Internalizing your feelings.</li>
                                    <li>Blaming yourself for how you are feeling.</li>
                                    <li>Feeling guilty about opening up to others.</li>
                                    <li>Casting judgment on others when they speak or share their own experiences.</li>
                                </ul>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem', alignSelf: 'center' }}>Page 1</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
