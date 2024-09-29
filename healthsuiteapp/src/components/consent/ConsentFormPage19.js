import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';

const ConsentFormPage19 = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [checkBoxStates, setCheckBoxStates] = useState({
    summary: false,
    futureContact: false,
    legalRights: false
  });
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');
  const [dataConsent, setDataConsent] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    verifyEmail: '',
    phone: '',
    nickname: ''
  });
  const [openExitDialog, setOpenExitDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [userid, setUserID] = useState(0);

  const handleCheckboxChange = (event) => {
    setCheckBoxStates({ ...checkBoxStates, [event.target.name]: event.target.checked });
  };

  const handleNext = () => {
    if (checkBoxStates.legalRights) {
      setShowAdditionalContent(true);
      setError('');
    } else {
      setShowAdditionalContent(false);
      setError('Agreeing to not waive any legal rights is mandatory.');
    }
  };

  const handleDataConsentChange = (event) => {
    setDataConsent(event.target.value);
  };

  const handleSubmit = () => {
    if (dataConsent) {
      setShowForm(true);
      setError('');
    } else {
      setError('Please make a selection regarding the use of your data for future research.');
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const userData = LocalStorageService.getItem('profile');
    if (userData) {
      setUserID(userData.id);
    }
  }, []);

  const handleAgree = () => {
    const { fullName, email, verifyEmail, phone, nickname } = formData;
    if (!fullName || !email || email !== verifyEmail || !phone || !nickname) {
      setError('All fields are required and emails must match.');
      return;
    }

    const payload = {
      emailResult: checkBoxStates.summary,
      futureStudies: checkBoxStates.futureContact,
      legalRights: checkBoxStates.legalRights,
      agreed: dataConsent === 'yes',
      fullName: fullName,
      emailAddress: email,
      phoneNumber: phone,
      userID: userid
    };

    setLoading(true);
    axiosInstance.post('/caregiver/v1/submit-consent', payload) 
    .then(response => {
        setOpenSuccessDialog(true); 
    })
    .catch(error => {
        alert(`Your consenting process wasn't successful at this time`);
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleNoThanks = () => {
    setOpenExitDialog(true);
  };

  const handleCloseExitDialog = (confirmExit) => {
    setOpenExitDialog(false);
    if (confirmExit) {
      navigate('/');
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    navigate('/'); // Navigate to home page after displaying the success dialog
  };

  return (
    <Container maxWidth="sm">
      {!loading && (
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>
        <Typography variant="h6" gutterBottom>
          Participant Consent:
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checkBoxStates.summary} onChange={handleCheckboxChange} name="summary" />}
            label="I would like a summary of the study results emailed to me."
          />
          <FormControlLabel
            control={<Checkbox checked={checkBoxStates.futureContact} onChange={handleCheckboxChange} name="futureContact" />}
            label="I would like to be contacted for future studies by this research team."
          />
          <FormControlLabel
            control={<Checkbox checked={checkBoxStates.legalRights} onChange={handleCheckboxChange} name="legalRights" />}
            label="I understand that by signing this document I do not waive any of my legal rights."
          />
        </FormGroup>
        <Button onClick={handleNext} variant="outlined" color="primary">
          Next
        </Button>

        {showAdditionalContent && (
          <>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              You have the option of allowing your study data to be re-used by approved researchers. Any of your personal information that can identify you will be removed before files are shared with other researchers. Researchers that wish to use study data must have their new study approved by an ethics board; and sign an agreement ensuring your confidentiality and restricting use to only the approved study.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={dataConsent === 'yes'} onChange={handleDataConsentChange} value="yes" />}
                label="Yes"
              />
              <FormControlLabel
                control={<Checkbox checked={dataConsent === 'no'} onChange={handleDataConsentChange} value="no" />}
                label="No"
              />
            </FormGroup>
            <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit
            </Button>
          </>
        )}

        {showForm && (
          <>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Electronic Signature
            </Typography>
            <Typography variant="body1" gutterBottom>
              By providing your email address you freely agree to take part in the study according to the terms outlined in this Consent Form.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="verifyEmail"
              label="Verify Email Address"
              name="verifyEmail"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Telephone Number"
              name="phone"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Name or Nickname used for communications from study staff"
              name="nickname"
              onChange={handleInputChange}
            />
            <Button onClick={handleAgree} variant="contained" color="primary" sx={{ mt: 2 }}>
              I Agree
            </Button>
            <Button onClick={handleNoThanks} variant="outlined" color="secondary" sx={{ mt: 2 }}>
              No, Thanks
            </Button>
          </>
        )}
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      </Container>  
      )}
      {loading && (
      <div>
        <LoadingComponent/>
      </div>
      )}
      <Dialog
        open={openExitDialog}
        onClose={() => handleCloseExitDialog(false)}
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
          <Button onClick={() => handleCloseExitDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleCloseExitDialog(true)} color="secondary" autoFocus>
            Yes, Exit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openSuccessDialog}
        onClose={handleCloseSuccessDialog}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your time. An email will be sent to you within 2 business days confirming your consent with the study information attached.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ConsentFormPage19;
