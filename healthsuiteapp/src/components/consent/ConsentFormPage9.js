import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Typography,
  FormGroup,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ConsentFormPage9 = () => {
  const navigate = useNavigate();
  const [internetCostAssumption, setInternetCostAssumption] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleInternetCostAssumptionChange = (event) => {
    setInternetCostAssumption(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page10'); // specify the next page route here
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
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
        <Typography variant="h6" gutterBottom>
          Will the study cost me anything?
        </Typography>
        <Typography paragraph>
          It does not cost anything to participate in the study. To be eligible for the study, however, you will need to have regular access to an internet-connected device (smartphone, tablet, or computer). We do not provide you with a smartphone, tablet, computer, or internet access.
        </Typography>
        <Typography paragraph>
          If you have limited internet access you should check with your service provider to make sure you will not go over your allowed access per month, which could result in extra costs on your monthly bill.
        </Typography>
        <FormGroup>
          <Typography paragraph>
            The study staff will cover the cost of my internet service.
          </Typography>
          <RadioGroup row value={internetCostAssumption} onChange={handleInternetCostAssumptionChange}>
            <FormControlLabel
              value="FALSE"
              control={<Radio />}
              label="False"
            />
            <FormControlLabel
              value="TRUE"
              control={<Radio />}
              label="True"
            />
          </RadioGroup>
          {internetCostAssumption && (
            <Alert severity="info">
              'FALSE: We do not provide internet service. Using this online program is similar to reading other text on the Internet or watching short YouTube videos. However, you should always be aware of your Internet usage so that you do not go over your limit (if you have one).'
            </Alert>
          )}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!internetCostAssumption}
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

export default ConsentFormPage9;
