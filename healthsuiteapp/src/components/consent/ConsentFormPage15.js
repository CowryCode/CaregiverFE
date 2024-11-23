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

const ConsentFormPage15 = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleContinue = () => {
    navigate('/consent-form/consentform-page16'); // specify the next page route here
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
          Are there things I can do to protect my privacy?
        </Typography>
        <Typography paragraph>
          When you log in to the Health enSuite Caregivers application, you will be asked to provide a username and password. You can help to protect your privacy by not sharing your username and password with anyone. We suggest that you DO NOT save your login information on your web browser. If you are using a public computer, or are in a public area (e.g., library, internet café, etc.) make sure to log off and close any open browser windows so others cannot access your account after you leave.
        </Typography>
        <Typography paragraph>
          When we email you about the study, we will only use your first name or nickname (if you provide a nickname). We will not put your personal, identifying information in any email (e.g., phone number, date of birth). We cannot guarantee the security of using email. Please do not send confidential or sensitive (private) information by email.
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

export default ConsentFormPage15;
