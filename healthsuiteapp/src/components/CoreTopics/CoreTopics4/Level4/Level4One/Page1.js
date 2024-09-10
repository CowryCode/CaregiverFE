import React, {useEffect,useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, IconButton } from '@mui/material';
import UpdateLibraryLastPage from '../../../../../apicall/UpdateLibraryLastPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark'; 
import Tooltip from '@mui/material/Tooltip';

const Page1 = () => {
    const navigate = useNavigate();
    const pageTitleRef = useRef(null);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleNext = () => {
        navigate('/library/core-topic4/level4/level4one/page2'); // Adjust this path to the next page
    };

    const handlePrevious = () => {
        navigate('/library/core-topic4/level4'); // Adjust this path to the previous page
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
            <Typography variant="h6" sx={{ mb: 2 }}>Page 1 of 2</Typography>
            <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    With a large healthcare team, it can be hard to track appointments and questions.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    A worksheet helps organize thoughts and concerns for medical appointments.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Create your own worksheet before the appointment.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Organize issues from most to least important.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Bring the worksheet to appointments to discuss your concerns with the doctor and healthcare team.
                </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>Example of a Worksheet:</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Doctor’s Name</TableCell>
                            <TableCell>Appointment Date</TableCell>
                            <TableCell>Appointment Time</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious}>Previous</Button>
                <Typography sx={{ fontSize: '0.875rem' }}>Page 1 of 2</Typography>
                <Button variant="contained" onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
};

export default Page1;
