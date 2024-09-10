import React, {useEffect,useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableRow, TableContainer, Paper , IconButton} from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page2 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4two/page1'); // Adjust this path to the next page
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4/level4one/page1'); // Adjust this path to the previous page
    };

    useEffect(() => {
        savePageUrl();
        setIsBookmarked(bookmarkedAlready);
      }, [isBookmarked]);
    
    const { successful, savePageUrl,bookmarkPageUrl, bookmarkedAlready  } = UpdateLibraryLastPage({
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
        <Box sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between'
        }}>
            <Box sx={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                <Tooltip title="Click to Bookmark">
                    <IconButton onClick={handleBookmark} aria-label="add to wishlist">
                        {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Tooltip>
            </Box>
            <Typography ref={pageTitleRef} variant="h4" sx={{ mb: 1, textAlign: 'center' }}>Worksheet for Medical Appointments</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Page 2 of 2</Typography>
            <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Issues to discuss: (most important to least important)
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>1.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>3.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>Notes:</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 2 of 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page2;
