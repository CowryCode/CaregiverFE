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
  const [emailExists, setEmailExists] = useState(false);
  const [phoneNumberExists, setPhoneNumberExists] = useState(false);
  const [activateSubmit, setActivateSubmit] = useState(false);

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

  // const handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  //   if(event.target.name === 'email'){
  //     if(isValidEmail(event.target.value)){
  //       setEmailExists(true);
  //       const [emailExists] = await confirmEmail(event.target.value);
  //     }
  //   }
  //   if(event.target.name === 'phone'){
  //     if(isValidCanadianPhoneNumber(event.target.value)){
  //       setPhoneNumberExists(true);
  //       const [phoneNumberExists] =  await confirmPhoneNumber(event.target.value);
  //     }
  //   }
  // };

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
  
    setFormData({ ...formData, [name]: value });
  
    try {
      if (name === 'email' && isValidEmail(value)) {
        const emailExists = await confirmEmail(value); 
        setEmailExists(emailExists); 
        if(emailExists) {
          setError('This email have been used by another user');
        }
      }
  
      if (name === 'phone' && isValidCanadianPhoneNumber(value)) {
        const phoneNumberExists = await confirmPhoneNumber(value); 
        setPhoneNumberExists(phoneNumberExists);
        if(phoneNumberExists){
          setError('This phone number have been used by another user');
        }
      }
    } catch (error) {
      console.error('Error during validation:', error);
    }
  };

  const isValidEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isValidCanadianPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+1\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }

  useEffect(() => {
    const userData = LocalStorageService.getItem('profile');
    if (userData) {
      setUserID(userData.id);
    }
  }, []);

  const handleAgree = (event) => {
    event.preventDefault();
    const { fullName, email, verifyEmail, phone, nickname } = formData;
    //if (!fullName || !email || email !== verifyEmail || !phone || !nickname) {
    if(!isValidEmail(email) ){
      setError('Invalid email');
    }else if (!isValidCanadianPhoneNumber(phone)){
      setError('Invalid phone number, ensure it is canadian number and has country code with');
    }else if (!fullName || !email || email !== verifyEmail || !phone) {
      setError('All fields are required and emails must match.');
      return;
    }else{
      //confirmEmail(formData.email, formData);
      // confirmAndSubmit(formData)
      // confirmEmail(email);
      // confirmPhoneNumber(phone);

      submitToAPI(formData);
    }
  };


  const submitToAPI = (formData) => {
    const payload = {
      emailResult: checkBoxStates.summary,
      futureStudies: checkBoxStates.futureContact,
      legalRights: checkBoxStates.legalRights,
      agreed: dataConsent === 'yes',
      fullName: formData.fullName,
      emailAddress: formData.email,
      phoneNumber: formData.phone,
      userID: userid
    };

    //setLoading(true);
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
  }

  const confirmEmail = async (email) => {
    const check = axiosInstance.get(`/caregiver/v1/confirm-email/${email}`) 
          .then(response => {
            console.log(`The feedback : ${response.data }`)
            if(response.data === true){
              // setEmailExists(true);
              console.log("Email exists . . .")
              return true;
            }
            return false;
            //submitToAPI(formData);
          })
          .catch(error => {
            setError('Email Address already used by another user');
            console.error('Error', error);
            throw new Error('Email confirmation failed');
        })
    return check;
  };

  const confirmPhoneNumber = async (phone) => {
    const check = axiosInstance.get(`/caregiver/v1/confirm-phone/${phone}`) 
          .then(response => {
            console.log(`The feedback : ${response.data }`)
            if(response.data === true){
              console.log("Phone Number exists . . .")
             // setPhoneNumberExists(true);
              return true;
            }
            return false;
            //submitToAPI(formData);
          })
          .catch(error => {
            setError('Email Address already used by another user');
            console.error('Error', error);
            throw new Error('Phone confirmation failed');
        })
    return check;
  };

  const handleNoThanks = () => {
    setOpenExitDialog(true);
  };

  const handleCloseExitDialog = (confirmExit) => {
    setOpenExitDialog(false);
    if (confirmExit) {
      navigate('/login');
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    navigate('/login'); // Navigate to home page after displaying the success dialog
  };

  return (
    <Container maxWidth="sm">
      {!loading && (
      <Container component="main" maxWidth="sm" sx={{ marginTop: 8 , paddingBottom: 8 }}>
        <Typography variant="h6" gutterBottom>
          Participant Consent:
        </Typography>
        {!showAdditionalContent && (
          <>
        {/* <Typography variant="h6" gutterBottom>
          Participant Consent:
        </Typography> */}
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
        </> )}
        {showAdditionalContent && !showForm && (
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

        {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

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
              // required
              fullWidth
              id="nickname"
              label="Name or Nickname used for communications from study staff"
              name="nickname"
              onChange={handleInputChange}
            />
            <Button 
            onClick={handleAgree} 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }}
            disabled = {emailExists || phoneNumberExists}
            >
              I Agree
            </Button>
            <Button onClick={handleNoThanks} variant="outlined" color="secondary" sx={{ mt: 2 }}>
              No, Thanks
            </Button>
          </>
        )}
        {/* {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>} */}
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
          <strong>
          Thank you for your interest in this project, please check your email for the next step
          </strong>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleCloseSuccessDialog} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions> */}
      </Dialog>
    </Container>
  );
};

export default ConsentFormPage19;
