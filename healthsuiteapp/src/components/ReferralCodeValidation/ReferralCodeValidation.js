import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  RadioGroup,
  FormHelperText,
  Radio,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./ReferralCodeValidation.css";
import Header from "../Header/Header";
import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';

const ReferralCodeValidation = () => {
  const navigate = useNavigate();

  const [referralCode, setReferralCode] = useState("");
  const [unknownReferralCode, setUnknownReferralCode] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [submitActive, setSubmitActive] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenNumber, setScreenNumber] = useState(0);
  const [profile, setProfile] = useState({});

  const handleReferralCodeChange = (event) => {
    setReferralCode(event.target.value);
    setUnknownReferralCode(false);
  };

  const handleUnknownReferralCodeChange = (event) => {
    setUnknownReferralCode(event.target.checked);
    if (event.target.checked) {
      setReferralCode("");
      setValidationMessage("");
      setParticipantName("");
    }
  };

  const comfirm = () => {
    routeUser(screenNumber);
  }

  const routeUser = (screenNumber) => {
      console.log(`SCREEN NUMBER :  ${screenNumber}`);
      const profileDetail = JSON.stringify(profile);
      console.log('SAVED PROFILE ' + profileDetail);
    
    switch (screenNumber) {
      case 1:
        navigate(`/eligibility-form`);
        break;
      case 2:
        navigate(`/consent-form`);
        break;
      case 3:
        navigate(`/baseline-questionnaire-f1`);
        break;
      case 4:
        navigate(`/baseline-questionnaire-f2`);
        break;
      case 5:
        navigate(`/baseline-questionnaire-f3`);
        break;
      case 6:
        navigate(`/user-complete-profile`);
        break;
      case 7:
        navigate(`/baseline-questionnaire-f4`);
        break;
      default:
        navigate(`/login`);
  }
};

    const updateScreenNumber = (userData) => {
      setScreenNumber(userData.preActiveScreenNumber);
      setProfile(userData);
    };


  useEffect(() => {
    const userData = LocalStorageService.getItem('profile');
    // const jsonString = JSON.stringify(userData);
    // console.log('SAVED PROFILE ' + jsonString);
    if (userData) {
      updateScreenNumber(userData);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(` CHOICE : ${unknownReferralCode}`);
    if(unknownReferralCode){
      alert("Kindly contact admin to retrieve your refcode (teamhealthensuite@iwk.nshealth.ca)")
      navigate(`/contact-us`);
    }else{
      submitToAPI();
    }
  };

  const handleContactAdmin = (event) => {
    event.preventDefault();
    navigate(`/contact-us`);
  };

  const submitToAPI = () => {
    setLoading(true);
    axiosInstance.get(`/caregiver/v1/login-with-refcode/${referralCode}`)
    .then(response => {
      const data = { participantName: `${response.data.firstName} ${response.data.lastName}` };
        LocalStorageService.setItem('profile', response.data);
        setErrorDialog(false);
        setScreenNumber(response.data.preActiveScreenNumber);
        setValidationMessage(`The code you have entered is for ${data.participantName}. Please confirm that your code has been entered correctly:`);
    })
    .catch(error => {
      setErrorDialog(true)
      setValidationMessage(`Invalid Refcode, kindly review your refcode. If you can't login, contact admin teamhealthensuite@iwk.nshealth.ca`);
    })
    .finally(() => {
      setLoading(false); // Hide throbber
      setOpenDialog(true);
    });
  }

  // const submitPageUpdateToAPI = (id, nextPage) => {
  //   const data = { userID: `${id}` , nextPageNumber: `${nextPage}`};
  //   console.log('ID : ' + id + ' Number : ' + nextPage);
  //   axiosInstance.post(`/caregiver/v1/update-signup-stage`, data)
  //   .then(response => {
  //     console.log('Page state updated')
  //   })
  //   .catch(error => {
  //     console.log('Page state updated failed')
  //   });
  // }

  const handleConfirmationChange = (event) => {
    setConfirmation(event.target.value);
    if (event.target.value === "yes") {
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  };

  const handleDialogClose = () => {
    const profile = LocalStorageService.getItem('profile');
    setOpenDialog(false);
    if(unknownReferralCode){
      navigate(`/`); 
    }
  };


  return (
    <Container maxWidth="sm" className="referral-code-validation-container">
      <Typography variant="h6" gutterBottom>
        Health enSuite Caregivers (Referral code validation)
      </Typography>
      {!loading && (
      <form onSubmit={handleSubmit}>
        <FormControlLabel
          control={<Checkbox checked={unknownReferralCode} onChange={handleUnknownReferralCodeChange} />}
          label="I do not know my referral code."
        />
        {!unknownReferralCode && (
          <TextField
            fullWidth
            margin="normal"
            label="My referral code is"
            value={referralCode}
            onChange={handleReferralCodeChange}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!referralCode && !unknownReferralCode}
          className="submit-button"
        >
          Submit
        </Button>
      </form>
      )}
      {loading && (
      <div>
        <LoadingComponent/>
      </div>
      )}

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Referral Code Validation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* {validationMessage} */}
            {confirmation !== 'yes' ?  validationMessage : "Thank you for your interest in the Health enSuite Caregiver study. Your answers to the following questions will help us determine if you are eligible to participate in this research study."}
          </DialogContentText>
          {!unknownReferralCode && !errorDialog && (<>
          <RadioGroup name="confirmation" value={confirmation} onChange={handleConfirmationChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes. This is me." />
            <FormControlLabel value="no" control={<Radio />} label="No. This is not me." />
          </RadioGroup> 
          {/* {confirmation === 'no' && (
            <FormHelperText error>
              contact admin : teamhealthensuite@iwk.nshealth.ca
            </FormHelperText>
          )} */}
          </>)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
          {confirmation === 'yes' && (
          <Button
            variant="contained"
            color="primary"
            // onClick={() => alert('Referral code submitted to backend')}
            onClick={comfirm}
            disabled={!submitActive}
          >
            Confirm
          </Button>
          )}
          {confirmation === 'no' && (
            <Button
            variant="contained"
            color="primary"
            onClick={handleContactAdmin}
            // disabled={!submitActive}
            >
            Contact Admin
          </Button>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ReferralCodeValidation;
