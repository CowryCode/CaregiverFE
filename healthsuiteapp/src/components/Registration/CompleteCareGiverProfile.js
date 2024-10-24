import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
} from "@mui/material";
import "./Registration.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';

const CompleteCareGiverProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age:0,
    email: "",
    phoneNumber: "",
    mailingAddress: "",
    userName: "",
    password: "",
    confirmPassword: "",
    emailAllowed: false,
    smsAllowed: false,
    appAllowed: false,
    noneAllowed: false,
    notificationSource: "",
    id: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      userName: formData.email,
    }));
  }, [formData.email]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName)
      newErrors.firstName = "First Name is required";
    if (!formData.lastName)
        newErrors.lastName = "Last Name is required";
    if (!formData.gender)
      newErrors.gender = "Age is required";
    if (!formData.age)
        newErrors.age = "Age is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Invalid phone number";
    if (!formData.phoneNumber)
        newErrors.phoneNumber = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.userName) newErrors.userName = "Don't autofil the email, input your email field to get username";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (!formData.emailAllowed && !formData.smsAllowed && !formData.appAllowed  && !formData.noneAllowed)
         newErrors.notificationSource = "Select one option from the above";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    submitToAPI();
    // THIS CHECK IS MOVED TO POINT OF SIGNUP BECAUSE EMAIL IS CAPTURED THEN
    // if (formData.email) {
    //     const emailExists = await confirmEmail(formData.email);
    //     if (emailExists) {
    //       setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         email: "Email Address already exists",
    //       }));
    //       return;
    //     }else{
    //      submitToAPI();
    //     }
    // }

    // if (formData.phoneNumber) {
    //   const phoneExists = await checkPhoneNumber(formData.phoneNumber);
    //   if (phoneExists) {
    //     setErrors((prevErrors) => ({
    //       ...prevErrors,
    //       phoneNumber: "Phone number already exists",
    //     }));
    //     return;
    //   }else{
    //    // submitToAPI();
    //   }
    // }
    // navigate(`/login`);
  };

  const handleCloseExitDialog = (confirmStart) => {
    // setShowSuccess(false);
    if (confirmStart) {
      navigate("/baseline-questionnaire-f1");
    } else {
      navigate(`/login`);
    }
  };

  // const confirmEmail = async (email) => {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   //Commented out actual API call for now
  //   const check = axiosInstance.get(`/caregiver/v1/confirm-email/${email}`) 
  //         .then(response => {
  //           const data = response.json();
  //           return data;
  //         })
  //   return check;
  // };

  const checkPhoneNumber = async (phoneNumber) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    //Commented out actual API call for now
    //const response = await fetch(`https://api.example.com/checkPhoneNumber?phone=${phoneNumber}`);
    // const response = await fetch(`http://localhost:8081/caregiver/v1/${phoneNumber}`);
    // const data = await response.json();
    // return data.exists;

    return false; // Change to true to simulate an existing number
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const preloadFormData = (profile) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: profile.firstName,
        lastName: profile.lastName,
        age:profile.age,
        gender: profile.gender,
        email: profile.userName,
        userName: profile.userName,
    }));
  };

  const updateUserID = (newUserID) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        id: newUserID
    }));
  };
  useEffect(() => {
    preloadData();
    // const userData = LocalStorageService.getItem('profile');
    // if (userData) {
    //     preloadFormData(userData);
    //     updateUserID(userData.id);
    //     setProfile(userData);
    // }
}, []);

const preloadData = () => {
  setLoading(true);
  const currentPath = location.pathname;
  const parts = currentPath.split('=');
  const userId = parts[1];

  axiosInstance.get(`/caregiver/v1/get-demographics/${userId}`)
  .then(response => {
    if (response) {
      preloadFormData(response.data);
      updateUserID(response.data.id);
      setProfile(response.data);
  }
  })
  .catch(error => {
      console.error('Error', error);
  })
  .finally(() => {
    setLoading(false);
  });
}


const submitToAPI = () => {
    setLoading(true);


    axiosInstance.post('/caregiver/v1/complete-profiles', formData) 
    .then(response => {
      setShowSuccess(true);
      //alert(`Congratulations, you have successfully created your login credentials.`);
      navigate(`/login`);
    })
    .catch(error => {
        alert(`Form processing unsuccessful  . . .`);
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
}

return (
    <>
    <Header />
      <Container maxWidth="sm" className="registration-form-container">
       {!loading && (
        <div>
        <Typography variant="h6" gutterBottom>
          Create your login details to access the full app:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Complete the form below to sign up (questions with * are mandatory):
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            // label="*Provider Name"
            label="First Name"
            name="firstName"
            disabled={true}
            value={profile.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Last Name"
            name="lastName"
            value={profile.lastName}
            disabled={true}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <FormControl
            fullWidth
            margin="normal"
            disabled={true}
            error={!!errors.practicingProvince}
          >
            <InputLabel>{profile.gender || "Gender"}</InputLabel>
            <Select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
            >
              <MenuItem value="">
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <FormHelperText>{errors.gender}</FormHelperText>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Age (in years)"
            name="age"
            value={profile.age}
            disabled={true}
            onChange={handleChange}
            error={!!errors.age}
            helperText={errors.age}
          />
          <TextField
            fullWidth
            margin="normal"
            label="*Email"
            name="email"
            disabled={true}
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="new-email"
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
            label="*User Name"
            name="userName"
            disabled={true}
            value={formData.userName}
            onChange={handleChange}
            error={!!errors.userName}
            helperText={errors.userName}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="*Password"
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
            label="*Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <FormControl component="fieldset" fullWidth margin="normal">
            <Typography variant="body1" gutterBottom>
            Preferred communication method (check all that apply)
            </Typography>

            <FormControlLabel
              control={
              <Checkbox
              name="emailAllowed"
              checked={formData.emailAllowed}
              onChange={handleCheckboxChange}
            />
          }
          label="Email"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="smsAllowed"
              checked={formData.smsAllowed}
              onChange={handleCheckboxChange}
            />
          }
          label="SMS / Text Message (Extra charges for SMS may apply depending on your phone plan)"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="appAllowed"
              checked={formData.appAllowed}
              onChange={handleCheckboxChange}
            />
          }
          label="Notifications within the app"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="noneAllowed"
              checked={formData.noneAllowed}
              onChange={handleCheckboxChange}
            />
          }
          label="I do not want to receive any notifications"
        />
        <FormHelperText style={{ color: 'red' }}>{errors.notificationSource}</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {showSuccess && (
            <Dialog
              open={showSuccess}
              onClose={() => handleCloseExitDialog(false)}
            >
              <DialogTitle>Registration Completed</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You have successfully completed your profile, you can start
                  the study now by completing the baseline Questionnaire or you
                  can click on the email the system will send to you.
                  <br />
                  <br />
                  Do you want to start now?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => handleCloseExitDialog(true)}
                  color="primary"
                >
                  Yes Start
                </Button>
                <Button
                  onClick={() => handleCloseExitDialog(false)}
                  color="secondary"
                  autoFocus
                >
                  No
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </form>
        </div>
        )}
        {loading && (
            <div>
                <LoadingComponent/>
            </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CompleteCareGiverProfile;
