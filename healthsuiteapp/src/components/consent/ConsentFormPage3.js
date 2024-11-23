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

const ConsentFormPage3 = () => {
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleResponseChange = (event) => {
    setResponseStatus(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page4'); // specify next page route here
  };

  const handleNotInterested = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (confirmExit) => {
    setOpenDialog(false);
    if (confirmExit) {
      navigate('/'); // specify exit route here
    }
  };

  return (
    <Container maxWidth="sm">
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 , paddingBottom: 8 }}>
        <Typography variant="h6" gutterBottom>
          Why are the researchers doing the study?
        </Typography>
        <Typography paragraph>
          Many people experience stress as a result of caring for a person with dementia. It can be challenging to take care of yourself while also managing your caregiving responsibilities. Health enSuite Caregivers is a new program that is designed to help caregivers find strategies they can use to improve their well-being. This research study aims to determine whether Health enSuite Caregivers is a more effective way to improve well-being than what is currently being offered to caregivers in Canada. The results of this study will help service providers and policymakers decide whether this program should be offered to more people.
        </Typography>
        <FormGroup>
          <Typography paragraph>
            Health enSuite Caregivers is already proven to work.
          </Typography>
          <RadioGroup row value={responseStatus} onChange={handleResponseChange}>
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
          {responseStatus && (
            <Alert severity="info">
              'FALSE: Health enSuite Caregivers is a new program. The content it delivers is based on existing evidence and recommendations. The purpose of this study is to determine if this new program is more effective than the services and care that are usually provided.'
            </Alert>
          )}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!responseStatus}
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

export default ConsentFormPage3;
