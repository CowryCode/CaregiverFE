import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText, RadioGroup, FormControlLabel, Radio, Typography
} from '@mui/material';
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    providerName: '',
    practicingProvince: '',
    email: '',
    phoneNumber: '',
    mailingAddress: '',
    userName: '',
    password: '',
    confirmPassword: '',
    referralSource: '',
    otherReferral: ''
  });

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.providerName) newErrors.providerName = "Provider Name is required";
    if (!formData.practicingProvince) newErrors.practicingProvince = "Practicing Province is required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email address";
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Invalid phone number";
    if (formData.password !== formData.confirmPassword) newErrors.password = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    if (formData.phoneNumber) {
      const phoneExists = await checkPhoneNumber(formData.phoneNumber);
      if (phoneExists) {
        setErrors(prevErrors => ({ ...prevErrors, phoneNumber: "Phone number already exists" }));
        return;
      }
    }
    console.log("Form submitted successfully", formData);
    navigate(`/login`); 
  };

  const checkPhoneNumber = async (phoneNumber) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // Commented out actual API call for now
    // const response = await fetch(`https://api.example.com/checkPhoneNumber?phone=${phoneNumber}`);
    // const data = await response.json();
    // return data.exists;

    return false; // Change to true to simulate an existing number
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container maxWidth="sm" className="registration-form-container">
      <Typography variant="h6" gutterBottom>
        Learn more about Health enSuite apps and receive updates about Health enSuite apps:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Complete the form below to sign up (questions with * are mandatory):
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="*Provider Name"
          name="providerName"
          value={formData.providerName}
          onChange={handleChange}
          error={!!errors.providerName}
          helperText={errors.providerName}
        />
        <FormControl fullWidth margin="normal" error={!!errors.practicingProvince}>
          <InputLabel>*Practicing Province</InputLabel>
          <Select
            name="practicingProvince"
            value={formData.practicingProvince}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Alberta">Alberta</MenuItem>
            <MenuItem value="British Columbia">British Columbia</MenuItem>
            <MenuItem value="Manitoba">Manitoba</MenuItem>
            <MenuItem value="New Brunswick">New Brunswick</MenuItem>
            <MenuItem value="Newfoundland and Labrador">Newfoundland and Labrador</MenuItem>
            <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
            <MenuItem value="Ontario">Ontario</MenuItem>
            <MenuItem value="Prince Edward Island">Prince Edward Island</MenuItem>
            <MenuItem value="Quebec">Quebec</MenuItem>
            <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
            <MenuItem value="Nunavut">Nunavut</MenuItem>
          </Select>
          <FormHelperText>{errors.practicingProvince}</FormHelperText>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="*Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mailing Address"
          name="mailingAddress"
          value={formData.mailingAddress}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="User Name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <FormControl component="fieldset" fullWidth margin="normal">
          <Typography variant="body1" gutterBottom>
            How did you hear about us?
          </Typography>
          <RadioGroup
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
          >
            <FormControlLabel value="Clinical Networks" control={<Radio />} label="Recommended through clinical networks" />
            <FormControlLabel value="Advertisements" control={<Radio />} label="Advertisements" />
            <FormControlLabel value="Conference" control={<Radio />} label="At a conference" />
            <FormControlLabel value="Internet" control={<Radio />} label="Internet" />
            <FormControlLabel value="Others" control={<Radio />} label="Others" />
          </RadioGroup>
          {formData.referralSource === 'Others' && (
            <TextField
              fullWidth
              margin="normal"
              label="Please specify"
              name="otherReferral"
              value={formData.otherReferral}
              onChange={handleChange}
            />
          )}
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Registration;
