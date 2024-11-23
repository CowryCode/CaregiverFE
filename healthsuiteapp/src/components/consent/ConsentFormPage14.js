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

const ConsentFormPage14 = () => {
  const navigate = useNavigate();
  const [dataStorageConfirmation, setDataStorageConfirmation] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleDataStorageConfirmationChange = (event) => {
    setDataStorageConfirmation(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page15'); // specify the next page route here
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
          How will my information be stored?
        </Typography>
        <Typography paragraph>
          All the information you give us during the study will be stored on a password-protected and encrypted database server residing within our secured cloud-based Amazon Web Services environment. Your answers to the questionnaires may be stored on your smartphone or tablet if you complete them while the device is offline. The next time your device is online, your answers will be uploaded to the secure online database.
        </Typography>
        <Typography paragraph>
          Any paper records related to your participation will be stored in a locked filing cabinet at the IWK Health Centre.
        </Typography>
        <Typography paragraph>
          At the end of the study, the data collected as part of this study will be archived for a minimum of 5 years. The study information that will be archived will be de-identified and will not include any of your personal information (name, contact information). The archived de-identified information will be stored in a secure location within the IWK Health Centre or outside of the IWK Health Centre.
        </Typography>
        <FormGroup>
          <Typography paragraph>
            De-identified (no names or contact information) study information will be stored for years.
          </Typography>
          <RadioGroup row value={dataStorageConfirmation} onChange={handleDataStorageConfirmationChange}>
            <FormControlLabel
              value="TRUE"
              control={<Radio />}
              label="True"
            />
            <FormControlLabel
              value="FALSE"
              control={<Radio />}
              label="False"
            />
          </RadioGroup>
          {dataStorageConfirmation && (
            <Alert severity="info">
              'TRUE: De-identified study data will be stored securely for a minimum of five years after study results have been published. This allows the study results to be verified, if needed, and recommended by the Research Ethics Board.'
            </Alert>
          )}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!dataStorageConfirmation}
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

export default ConsentFormPage14;
