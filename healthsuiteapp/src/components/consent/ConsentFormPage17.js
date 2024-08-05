import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const ConsentFormPage17 = () => {
  const navigate = useNavigate();
  const [participation, setParticipation] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleParticipationChange = (event) => {
    setParticipation(event.target.checked ? event.target.value : '');
  };

  const handleContinue = () => {
    if (participation === 'agree') {
      navigate('/consent-form/consentform-page18'); // specify the next page route here if they agree to participate
    } else {
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = (confirmExit) => {
    setOpenDialog(false);
    if (confirmExit) {
      navigate('/'); // specify the exit route here if they do not want to participate
    }
  };

  return (
    <Container maxWidth="sm">
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
        <Typography variant="h6" gutterBottom>
          What are my research rights?
        </Typography>
        <Typography paragraph>
          Completing this online consent form indicates that you have agreed to take part in this research and for your responses to be used. In no way does this waive your legal rights nor release the investigators or the IWK Health Centre from their legal and professional responsibilities.
        </Typography>
        <Typography paragraph>
          Should you become distressed while participating in the intervention, or if you have questions or need additional information regarding the application or the study before or after the trial, contact information for the Health enSuite Team will be available on the Referral Sheet provided to you by the healthcare provider who referred you to the study and will also be displayed on the app.
        </Typography>
        <Typography paragraph>
          Your signature on this form only indicates that you have understood to your satisfaction the information regarding your participation in the study and agree to participate in the study. In no way does this waive your legal rights nor release the principal investigator, the research team, the study sponsor or involved institutions from their legal and professional responsibilities.
        </Typography>
        <Typography paragraph>
          You will be told about any new information that might reasonably affect your willingness to continue to participate in this study as soon as the information becomes available to the research team.
        </Typography>
        <Typography paragraph>
          If you would like to speak to a member of the Research Team about this Consent Form or ask questions about the study before you decide to take part, please click the Contact Us button or call toll-free: [1-877-341-8309 ext 5- Monday to Friday 10:00 am – 5:00 pm Atlantic Time].
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleParticipationChange} value="agree" />}
            label="I would like to participate."
          />
          <FormControlLabel
            control={<Checkbox onChange={handleParticipationChange} value="disagree" />}
            label="I am not interested in participating."
          />
        </FormGroup>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleContinue}
          disabled={!participation}
        >
          Continue
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

export default ConsentFormPage17;
