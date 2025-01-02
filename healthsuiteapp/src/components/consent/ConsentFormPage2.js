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

const ConsentFormPage2 = () => {
  const navigate = useNavigate();
  const [consentStatus, setConsentStatus] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleConsentChange = (event) => {
    setConsentStatus(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page3');
  };

  const handleNotInterested = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (confirmExit) => {
    setOpenDialog(false);
    if (confirmExit) {
      navigate('/');
    }
  };

  return (
    <Container maxWidth="sm">
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 , paddingBottom: 8 }}>
        <Typography variant="h6" gutterBottom>
          Introduction
        </Typography>
        <Typography paragraph>
          You are being invited to take part in the Health eSuite Caregivers Study. Before you decide if you want to take part in this research study, it is important that you understand the purpose of the study, the risks and benefits, and what you will be asked to do.
        </Typography>
        <Typography paragraph>
          You do not have to take part in this study. Taking part is entirely voluntary (your choice).
        </Typography>
        <Typography paragraph>
          Informed consent starts with the initial contact about the study and continues until the end of the study.
        </Typography>
        <Typography paragraph>
          You may contact study staff to answer any questions you have by calling (902) 470 7934 or calling toll-free (no charge) 1-877-341-8309 ext 5 or by clicking the [contact us] button on Monday – Friday, between 9 a.m. to 5 p.m. Atlantic Time.
        </Typography>
        <Typography paragraph>
          You may decide not to take part or you may withdraw from the study at any time. This will not affect the care you or your family members will receive from the healthcare provider that referred you to the study.
        </Typography>
        <FormGroup>
          {/* <Typography paragraph>
            This study is voluntary. I do not have to take part and can leave the study at any time.
          </Typography> */}
          {/* <RadioGroup row value={consentStatus} onChange={handleConsentChange}>
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
          {consentStatus && (
            <Alert severity="info">
              'TRUE: You do not have to take part in this study.'
            </Alert>
          )} */}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          // disabled={!consentStatus}
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
          <Button onClick={() => handleCloseDialog(true)} color="secondary" autoFocus >
            Yes, Exit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ConsentFormPage2;
