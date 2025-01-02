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

const ConsentFormPage8 = () => {
  const navigate = useNavigate();
  const [withdrawalOption, setWithdrawalOption] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleWithdrawalOptionChange = (event) => {
    setWithdrawalOption(event.target.value);
  };

  const handleContinue = () => {
    navigate('/consent-form/consentform-page9'); // specify the next page route here
  };

  const handleNotInterested = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (confirmExit) => {
    setOpenDialog(false);
    if (confirmExit) {
      navigate('/home'); // specify the exit route here
    }
  };

  return (
    <Container maxWidth="sm">
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 , paddingBottom: 8 }}>
        <Typography variant="h6" gutterBottom>
          Can I withdraw from the study?
        </Typography>
        <Typography paragraph>
          Your participation in this study is voluntary. You may withdraw from the study at any time. Withdrawing from the study at any time will not affect the care you or your family will receive from the healthcare provider who referred you to the study.
        </Typography>
        <Typography paragraph>
          To withdraw from the study, you can use the “Withdraw from Research Study” tab within Health enSuite Caregivers application, or you can contact us by email (TeamHealthEnSuite@iwk.nshealth.ca) or phone ((902) 470 7934 or toll-free number: 1-877-341-8309 press 5, Monday-Friday, between 9 a.m. to 5 p.m. Atlantic Time).
        </Typography>
        <Typography paragraph>
          You will be sent an email confirming that you have withdrawn from the study. Your identifiable information will be completely erased from the study database. Information from any assessments you have completed (e.g., questionnaires, sleep diaries) will be retained. This information will be identified with a unique system-generated code.
        </Typography>
        {/* <FormGroup>
          <Typography paragraph>
            I may decide NOT to take part in the study – even after I sign the Consent Form.
          </Typography>
          <RadioGroup row value={withdrawalOption} onChange={handleWithdrawalOptionChange}>
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
          {withdrawalOption && (
            <Alert severity="info">
              'TRUE: You may stop taking part in the study at any time.'
            </Alert>
          )}
        </FormGroup> */}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          // disabled={!withdrawalOption}
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

export default ConsentFormPage8;
