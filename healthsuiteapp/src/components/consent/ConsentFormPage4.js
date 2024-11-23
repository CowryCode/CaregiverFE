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

const ConsentFormPage4 = () => {
  const navigate = useNavigate();
  const [selectionStatus, setSelectionStatus] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleSelectionChange = (event) => {
    setSelectionStatus(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page5'); // specify the next page route here
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
          How will the researchers do the study?
        </Typography>
        <Typography paragraph>
          This study uses a randomized controlled design. This means that you will be randomly (similar to flipping a coin) put into one of two groups using a 1:1 ratio. For every one person put into the treatment group, one person will be put into a waitlist control group. The treatment group will receive access to the Health enSuite Caregivers app, and the other group will be assigned to a waiting list. Those on the waiting list will be able to access Health enSuite Caregivers after the study is over. It is important that you understand that you might be assigned to either group, and that you cannot choose the group that you want.
        </Typography>
        <Typography paragraph>
          Our goal is to recruit a total of 400 adults who are caregivers caring for a person with moderate dementia from across Canada. Half of them will be assigned to the Health enSuite group and half of them will be assigned to the waiting list group. We will measure caregiver’s well-being several times over the course of 6 months to see if there are any differences between the groups. We are interested in whether people who received Health enSuite Caregivers tend to do better over time than people who received their usual care.
        </Typography>
        <Typography paragraph>
          All aspects of this study will be completed online. This app was designed specifically for this study. The information collected will be kept confidential. You can download this app to use on your smartphone or access it through a web browser. The content in both versions is the same, so you can use whichever format you prefer.
        </Typography>
        <FormGroup>
          <Typography paragraph>
            I can choose the treatment group I want.
          </Typography>
          <RadioGroup row value={selectionStatus} onChange={handleSelectionChange}>
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
          {selectionStatus && (
            <Alert severity="info">
              'FALSE: Your treatment group will be randomly assigned.'
            </Alert>
          )}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!selectionStatus}
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

export default ConsentFormPage4;
