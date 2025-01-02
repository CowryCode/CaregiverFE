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

const ConsentFormPage5 = () => {
  const navigate = useNavigate();
  const [assessmentFrequency, setAssessmentFrequency] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleAssessmentFrequencyChange = (event) => {
    setAssessmentFrequency(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page6'); // specify the next page route here
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
          What will I be asked to do?
        </Typography>
        <Typography paragraph>
          If you agree to participate in the study, the first step is to complete the baseline assessment. You will be asked to answer a series of questions about yourself, the person you are caring for, and your experiences as a caregiver. The baseline assessment is important because it lets us know how you were doing before the intervention begins.
        </Typography>
        <Typography paragraph>
          After you have completed the baseline assessment, you will be randomly assigned (similar to flipping a coin) to receive Health enSuite Caregivers right away (intervention group) or after 6 months of enrollment (waitlist group). Once you have access to the information, you will be able to revisit this content within the Health enSuite app as often as you like over 12 weeks of the program.
        </Typography>
        <Typography paragraph>
          Following the participation in a 12-week program, you will complete the follow-up assessments at 3 months and again at 6 months. The follow-up assessments will be similar to the baseline assessment. It is important that you complete the follow-up assessment so that we know about any changes you have experienced. If some aspects of your well-being have improved, we want to know. If some things have gotten worse, we want to know that too.
        </Typography>
        {/* <FormGroup>
          <Typography paragraph>
            Question: I will be asked to answer questions about my experiences as a caregiver only once.
          </Typography>
          <RadioGroup row value={assessmentFrequency} onChange={handleAssessmentFrequencyChange}>
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
          {assessmentFrequency && (
            <Alert severity="info">
              'FALSE: You will be asked questions about your experiences as a caregiver three times during the study.'
            </Alert>
          )}
        </FormGroup> */}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          // disabled={!assessmentFrequency}
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

export default ConsentFormPage5;
