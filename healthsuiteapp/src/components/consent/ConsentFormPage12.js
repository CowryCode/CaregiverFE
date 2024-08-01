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

const ConsentFormPage12 = () => {
  const navigate = useNavigate();
  const [privacyConcern, setPrivacyConcern] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handlePrivacyConcernChange = (event) => {
    setPrivacyConcern(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page13'); // specify the next page route here
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
          How will my privacy be protected?
        </Typography>
        <Typography paragraph>
          Information you give us throughout the study will be kept confidential. Your personal, identifying information (e.g., name, contact information) will only be seen by people directly involved in the study (researchers and study staff). When the study results are shared with someone outside the research team, your personal, identifying information will not be included.
        </Typography>
        <Typography paragraph>
          None of the information you enter on the Health enSuite Caregivers application will be accessible or visible to other participants in the study. Only members of the research team, The IWK Research Ethics Board (IWK REB), the Nova Scotia Health Research Ethics Board (NSH REB), and the University of Saskatchewan Research Ethics Board (USASK REB) will have access to data collected in Health enSuite Caregivers. The NSH REB and IWK REB, or people working for NSH REB or IWK REB may need to look at your personal information to check that the information collected for the study is correct and to make sure the study followed the required laws and guidelines.
        </Typography>
        <Typography paragraph>
          E-messaging (email and texting) can be used by a member or members of the research team to communicate with you while you are in this study. All communication done with you will be done only through an NSH Webmail account, or text by a phone issued to a research member through Nova Scotia Health (NSH). All efforts are made to keep information sent or received private, but it is possible other people may be able to see, read, and change messages sent to or from NSH.
        </Typography>
        <FormGroup>
          <Typography paragraph>
            When the study is published, people will know I was a part of the study.
          </Typography>
          <RadioGroup row value={privacyConcern} onChange={handlePrivacyConcernChange}>
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
          {privacyConcern && (
            <Alert severity="info">
              'FALSE: All information gathered about you during the study is private and confidential. Identifying information will not be included in any presentation or publication of the results of the study.'
            </Alert>
          )}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!privacyConcern}
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

export default ConsentFormPage12;
