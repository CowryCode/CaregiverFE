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
    // 1 = Caregiver Eligibility Screen (/eligibility-form)
      // 2 = Consent form (/consent-form)
      // 3 = Baseline Questionnaire Screen 1 (/baseline-questionnaire-f1)
      // 4 = Baseline Questionnaire Screen 2 (/baseline-questionnaire-f2)
      // 5 = Baseline Questionnaire Screen 3 (/baseline-questionnaire-f3)
      // 6 = Baseline Questionnaire Screen 4 (/baseline-questionnaire-f4)
      // 7 = Complete user profile (/user-complete-profile)
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
        navigate(`/baseline-questionnaire-f4`);
        break;
      case 7:
        navigate(`/user-complete-profile`);
        break;
      case 8:
        navigate(`/login`);
        break;
      default:
        console.warn('Unknown screen number:', screenNumber);
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
    // Simulate API call to validate referral code
    // fetch('/api/validateReferralCode', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ referralCode })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setParticipantName(data.participantName);
    //     setValidationMessage(`The code you have entered is for ${data.participantName}. Please confirm that your code has been entered correctly:`);
    //     setOpenDialog(true);
    //   })
    //   .catch(error => console.error('Error validating referral code:', error));

    // Dummy data for demonstration
    // const data = { participantName: "John Doe" };
    // setParticipantName(data.participantName);
    // if(unknownReferralCode){
    //   setValidationMessage(`Please contact admin from the home page to retrieve your refcode`);
    // }else{
    //   setValidationMessage(`The code you have entered is for ${data.participantName}. Please confirm that your code has been entered correctly:`);
    // }

    submitToAPI();

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
      setValidationMessage(`Invalid Refcode, kindly review your refcode. If you can't login, contact your provider`);
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
            {validationMessage}
          </DialogContentText>
          {!unknownReferralCode && !errorDialog &&
          <RadioGroup name="confirmation" value={confirmation} onChange={handleConfirmationChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes. This is me." />
            <FormControlLabel value="no" control={<Radio />} label="No. This is not me." />
          </RadioGroup>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => alert('Referral code submitted to backend')}
            onClick={comfirm}
            disabled={!submitActive}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ReferralCodeValidation;
