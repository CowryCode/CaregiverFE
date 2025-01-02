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

const ConsentFormPage7 = () => {
  const navigate = useNavigate();
  const [benefitGuarantee, setBenefitGuarantee] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleBenefitGuaranteeChange = (event) => {
    setBenefitGuarantee(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page8'); // specify the next page route here
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
          What are the possible benefits?
        </Typography>
        <Typography paragraph>
          It is possible that you will experience some benefits from participating in this study. This could include reduced stress and an improved ability to cope with problems when they happen. It is possible that these improvements will stay with you long after the study is over. However, it is also possible that the study intervention may provide no benefits to some participants.
        </Typography>
        <Typography paragraph>
          Your participation in this study may also benefit others. The outcomes of this study could help other people gain access to effective treatment that was previously unavailable.
        </Typography>
        {/* <FormGroup>
          <Typography paragraph>
            This study is guaranteed to reduce my stress levels.
          </Typography>
          <RadioGroup row value={benefitGuarantee} onChange={handleBenefitGuaranteeChange}>
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
          {benefitGuarantee && (
            <Alert severity="info">
              'FALSE: It is possible that you will experience improvements in your stress levels, but this is not guaranteed.'
            </Alert>
          )}
        </FormGroup> */}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          // disabled={!benefitGuarantee}
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

export default ConsentFormPage7;
