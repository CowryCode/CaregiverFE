import React, { useState } from "react";
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
    navigate(`/eligibility-form`);
  };

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
    const data = { participantName: "John Doe" };
    setParticipantName(data.participantName);
    if(unknownReferralCode){
      setValidationMessage(`Please contact admin from the home page to retrieve your refcode`);
    }else{
      setValidationMessage(`The code you have entered is for ${data.participantName}. Please confirm that your code has been entered correctly:`);
    }
  };

  const submitToAPI = () => {
    setLoading(true);
    axiosInstance.get(`/caregiver/v1/login-with-refcode/${referralCode}`)
    .then(response => {
      const data = { participantName: `${response.data.firstName} ${response.data.lastName}` };
       LocalStorageService.setItem('profile', response.data)
        setErrorDialog(false)
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

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Referral Code Validation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {validationMessage}
          </DialogContentText>
          {!unknownReferralCode && 
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
