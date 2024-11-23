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

const ConsentFormPage6 = () => {
  const navigate = useNavigate();
  const [adviceHelpfulness, setAdviceHelpfulness] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleAdviceHelpfulnessChange = (event) => {
    setAdviceHelpfulness(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page7'); // specify the next page route here
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
          What are the burdens, harms, and potential harms?
        </Typography>
        <Typography paragraph>
          Health enSuite Caregivers includes a lot of information and recommendations for you to try. Some of these suggestions might be helpful for you. Other suggestions might not help at all. Although the Health enSuite programs are not intended to create additional burdens on your time, you will need to devote at least some time to using Health enSuite Caregivers in order to potentially benefit.
        </Typography>
        <Typography paragraph>
          Any advice you receive as a participant in this study does not replace the advice of a licensed healthcare provider. If you are experiencing significant distress, please consult your healthcare provider or the healthcare provider who referred you to the study. You may also let us know by emailing our study coordinator at TeamHealthEnSuite@iwk.nshealth.ca or calling: 902-470-7934 or toll-free number: 1-877-341-8309 press 5. You may also use the Contact Us button on the Health enSuite Caregivers to report any problems.
        </Typography>
        <Typography paragraph>
          We will be responsible for protecting your personal health information. However, there is a rare possibility that your personal health information is released inadvertently.
        </Typography>
        <FormGroup>
          <Typography paragraph>
            Some of the advice I receive while participating in this study might not be helpful for me.
          </Typography>
          <RadioGroup row value={adviceHelpfulness} onChange={handleAdviceHelpfulnessChange}>
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
          {adviceHelpfulness && (
            <Alert severity="info">
              'TRUE: If you find that something is not helpful, don’t continue doing it. Try something else instead.'
            </Alert>
          )}
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!adviceHelpfulness}
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

export default ConsentFormPage6;
