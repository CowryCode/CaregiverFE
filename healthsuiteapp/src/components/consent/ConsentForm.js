import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, FormControlLabel, Checkbox, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import './ConsentForm.css';

const ConsentForm = () => {
  const navigate = useNavigate();

  const [consentStatus, setConsentStatus] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  const handleUnknownReferralCodeChange = (event) => {
    setConsentStatus(event.target.checked);
  };

  const comfirm = () => {
        navigate(`/registration`); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate API call to validate referral code
    // fetch('/api/validateReferralCode', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ referralCode })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setParticipantName(data.participantName);
    //     setValidationMessage(`The code you have entered is for ${data.participantName}. Please confirm that your code has been entered correctly:`);
    //     setOpenDialog(true);
    //   })
    //   .catch(error => console.error('Error validating referral code:', error));

    // Dummy data for demonstration
    // const data = { participantName: 'John Doe' };
    // setParticipantName(data.participantName);
    // setValidationMessage(`The code you have entered is for ${data.participantName}. Please confirm that your code has been entered correctly:`);
    setOpenDialog(true);
  };

 

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="sm" className="consent-code-validation-container">
      <Typography variant="h6" gutterBottom>
        Health enSuite Caregivers (Consent Form)
      </Typography>
      <Typography  gutterBottom>
        The term and condition goes here . . . 
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
        The term and condition goes here . . .
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControlLabel
          control={<Checkbox checked={consentStatus} onChange={handleUnknownReferralCodeChange} />}
          label="I agree to T n C."
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!consentStatus}
          className="submit-button"
        >
          Submit
        </Button>
      </form>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Thanks for Consenting</DialogTitle>
        <DialogContent>
          <DialogContentText>
             You will recieve and email with URL on how to continue with the Caregiver App
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={comfirm}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ConsentForm;
