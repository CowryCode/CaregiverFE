import React, { useState } from 'react';
import {
  Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import './CaregiverRegistration.css';

import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apicall/AxiosInstance';

const CaregiverRegistration = () => {
  const navigate = useNavigate();

  const [eligibility, setEligibility] = useState({
    moderateDementia: '',
    experiencingDistress: ''
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: ''
  });
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [referralCode, setReferralCode] = useState(null);

  const handleEligibilityChange = (event) => {
    setEligibility({
      ...eligibility,
      [event.target.name]: event.target.value
    });
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.age || isNaN(formData.age)) newErrors.age = "Valid Age is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEligibilitySubmit = (event) => {
    event.preventDefault();
    if (eligibility.moderateDementia === 'No' || eligibility.experiencingDistress === 'No') {
      setShowForm(false);
      setOpenDialog(true);
    } else if (eligibility.moderateDementia === 'Yes' && eligibility.experiencingDistress === 'Yes') {
      setShowForm(true);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const response = await fetchReferralCode();
    setReferralCode(response);

    submitToAPI();
    
  };

  const submitToAPI = () => {
    axiosInstance.post('/caregiver/v1/create-care-provider', { data: formData }) // Replace with your API endpoint and data
    .then(response => {
        // setResponseData(response.data);
        alert(`Caregiver API response :  ${response.data}`);
    })
    .catch(error => {
        console.error('There was an error making the POST request!', error);
    });
  }



  const fetchReferralCode = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return "REF123456";
  };

  const handleDialogClose = (action) => {
    if (action === 'OK') {
      window.location.href = '/provider-dashboard';
    }
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="sm" className="caregiver-registration-container">
      <Typography variant="h6" gutterBottom>
        Caregiver’s eligibility and registration
      </Typography>
      <form onSubmit={handleEligibilitySubmit}>
        <FormControl component="fieldset" className="caregiver-form-group">
          <FormLabel component="legend">1. Does the person this caregiver is providing care for have moderate dementia?</FormLabel>
          <RadioGroup name="moderateDementia" value={eligibility.moderateDementia} onChange={handleEligibilityChange}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className="caregiver-form-group">
          <FormLabel component="legend">2. Is the caregiver experiencing distress?</FormLabel>
          <RadioGroup name="experiencingDistress" value={eligibility.experiencingDistress} onChange={handleEligibilityChange}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <div className="submit-button-container">
          <Button variant="contained" color="primary" type="submit" className="eligibility-submit-button">
            Submit
          </Button>
        </div>
      </form>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="caregiver-referral-form">
          <Typography variant="h6" gutterBottom>
            Referral form
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Age (years)"
            name="age"
            value={formData.age}
            onChange={handleFormChange}
            error={!!errors.age}
            helperText={errors.age}
          />
          <FormControl fullWidth margin="normal">
            <FormLabel>Gender</FormLabel>
            <RadioGroup name="gender" value={formData.gender} onChange={handleFormChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Others" control={<Radio />} label="Others" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" color="primary" type="submit" className="submit-button">
            Submit
          </Button> 
          <Button variant="contained" color="primary"  style={{ marginLeft: '10px' }}  onClick={() => navigate('/similar-users')}>
            Similiar Users Exists
          </Button>
        </form>
      )}

      {referralCode && (
        <div className="referral-code-container">
          <Typography variant="h6" gutterBottom>
            Health enSuite Caregivers
          </Typography>
          <Typography variant="body1">
            Follow the steps below to learn more about how you can access Health enSuite Caregivers. It is an online program for caregivers of people with dementia that is currently being evaluated by a team of researchers based at the IWK Health Centre.
          </Typography>
          <Typography variant="body1">
            To access the Health enSuite Caregivers:
            <ol>
              <li>Open a web browser on your computer, tablet, or smartphone. Direct your browser to this address: &lt;&lt;URL goes here&gt;&gt;</li>
              <li>Enter your referral code. This will be used to verify who you are. Your referral code is: <strong>{referralCode}</strong></li>
              <li>Follow the directions on the screen to learn more about the Health enSuite Caregivers Study and to decide whether you would like to participate.</li>
            </ol>
          </Typography>
          <Typography variant="body1">
            If you have any questions, you can contact the Health enSuite research team by email: TeamHealthEnSuite@iwk.nshealth.ca OR phone: (902) 470 7934 or call the toll-free number: 1-877-341-8309 ext 5.
          </Typography>
          <Typography variant="body1">
            If you misplace this instructions sheet, do not worry! You can either request your health care provider to issue a new one OR contact the Health enSuite research team by email: TeamHealthEnSuite@iwk.nshealth.ca OR phone: (902) 470 7934 or call the toll-free number: 1-877-341-8309 press 5.
          </Typography>
          <Typography variant="body1">
            Best regards,<br />
            Health enSuite team
          </Typography>
        </div>
      )}

      <Dialog open={openDialog} onClose={() => handleDialogClose('Cancel')}>
        <DialogTitle>Eligibility Check</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This caregiver is not eligible for this tool. This tool is designed to support caregivers experiencing stress, and providing care for a person with moderate dementia.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose('Cancel')} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleDialogClose('OK')} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CaregiverRegistration;
