import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ConsentFormPage16 = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleContinue = () => {
    navigate('/consent-form/consentform-page17'); // specify the next page route here
  };

  const handleNotInterested = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (confirmExit) => {
    setOpenDialog(false);
    if (confirmExit) {
      navigate('/home'); // specify the exit route here
    }
  };

  return (
    <Container maxWidth="sm">
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
        <Typography variant="h6" gutterBottom>
          What if I have study questions or problems?
        </Typography>
        <Typography paragraph>
          You may contact us by phone or email with questions or problems. Our contact information is below:
        </Typography>
        <Typography paragraph>
          <strong>Email:</strong> TeamHealthEnSuite@iwk.nshealth.ca
        </Typography>
        <Typography paragraph>
          <strong>Phone:</strong> (902) 470 7934 or call toll-free number: 1-877-341-8309 press 5
        </Typography>
        <Typography paragraph>
          Rekha Dhonde, our research coordinator, will be available to answer your call Monday – Friday from 9:00 a.m. to 5:00 p.m. Atlantic Time. You may leave a message if our Research Coordinator is unable to take your call or you need to call outside of our working hours.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
        >
          Continue
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleNotInterested}
        >
          No thanks, I am not interested
        </Button>
      </Container>

      <Dialog
        open={openDialog}
        onClose={() => handleCloseDialog(false)}
      >
        <DialogTitle>Exit Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your interest in Health enSuite Caregivers. We understand you are not interested in participating in our study.
            <br /><br />
            Are you sure you want to exit?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleCloseDialog(true)} color="secondary" autoFocus>
            Yes, Exit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ConsentFormPage16;
