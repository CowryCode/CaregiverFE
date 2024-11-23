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

const ConsentFormPage10 = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleContinue = () => {
    navigate('/consent-form/consentform-page11'); // specify the next page route here
  };

  const handleNotInterested = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (confirmExit) => {
    setOpenDialog(false);
    if (confirmExit) {
      navigate('/'); // specify the exit route here
    }
  };

  return (
    <Container maxWidth="sm">
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 , paddingBottom: 8 }}>
        <Typography variant="h6" gutterBottom>
          Are there any conflicts of interest? What about possible profit from commercialization?
        </Typography>
        <Typography paragraph>
          You should know that Dr. McGrath owns all Health enSuite programs. He intends to form a not-for-profit company to distribute Health enSuite in Canada.
        </Typography>
        <Typography paragraph>
          He may form a for-profit company for distribution in other countries and may profit if any of the Health enSuite programs are commercialized in the future. If the program is commercialized and makes a profit, study participants will not receive any of these profits.
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

export default ConsentFormPage10;
