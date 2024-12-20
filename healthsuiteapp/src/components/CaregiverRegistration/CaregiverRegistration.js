import React, { useState } from 'react';
import {
  Container, Divider, TextField, FormControl, FormHelperText, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import './CaregiverRegistration.css';

import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import AxiosInstanceProvider from '../../apicall/AxiosInstanceProvider';


const CaregiverRegistration = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [eligibility, setEligibility] = useState({
    moderateDementia: '',
    experiencingDistress: '',
    caregiverconsent: '',
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    allowDuplicateRecord: false,
  });
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [referralCode, setReferralCode] = useState(null);
  const [referralCodeUrl, setReferralCodeUrl] = useState(null);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [caregiverconsented, setCaregiverConsented] = useState(true);
  const [similarProfiles, setSimilarProfiles] = useState(false);
  const [userId, setUserId] = useState(0);

  const [rows, setRows] = useState([]);

  const handleGetRefCode = async (id) => {
    // setReferralCode("REF123456");
    // setOpenDialog(true);
    retrieveRefCode(id)
  };

  const handleEligibilityChange = (event) => {
    if(event.target.name === 'caregiverconsent' && event.target.value === "No"){
      setCaregiverConsented(false);
    } 
    setEligibility({
      ...eligibility,
      [event.target.name]: event.target.value
    });
  };

  const handleNoConsent = (action) => {
      //setCaregiverConsented(true);
      window.location.reload();
  };


  const handleNotEligible = (action) => {
    //setCaregiverConsented(true);
    window.location.reload();
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
    if (!formData.gender) newErrors.gender = "Gender is required";
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

    // const response = await fetchReferralCode();
    // setReferralCode(response);

    if(similarProfiles){
      setFormData({
        ...formData,
        allowDuplicateRecord: true
      });
    }

    submitToAPI();
    
  };

  const submitToAPI = () => {
    setLoading(true);
    const jsonString = JSON.stringify(formData);
    console.log("Form data : ", jsonString)
    //axiosInstance.post('/caregiver/v1/create-care-provider', formData)
    AxiosInstanceProvider.post(`/caregiver/v1/create-care-provider/${similarProfiles}`, formData)
    .then(response => {
        // setResponseData(response.data);
        //alert(`Caregiver API response :  ${JSON.stringify(response.data)}`);


        // setReferralCode(response.data.referralCode);
        // setReferralCodeUrl(response.data.url);
         if(!similarProfiles){
          const isDataNull = response.data !== null;
          const isSimilarProfilesNull = response.data?.similarProfiles !== null;
          const size = response.data?.similarProfiles?.length || 0;
          if(response.data !== null){
            if(response.data?.similarProfiles !== null){
              const size = response.data?.similarProfiles?.length || 0;
              if(size > 0){
                const date = response.data?.similarProfiles[0].referralDate ? new Date(response.data?.similarProfiles[0].referralDate).toISOString().split("T")[0] : "N/A";
                setRows(response.data?.similarProfiles);
                setSimilarProfiles(true);
              }
            }else{
              setReferralCode(response.data.referralCode);
              setReferralCodeUrl(response.data.url);
            }
          }
         }else{
          setReferralCode(response.data.referralCode);
          setReferralCodeUrl(response.data.url);
        } 
        setUserId(response.data.id)
    })
    .catch(error => {
        setOpenErrorDialog(true);
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const retrieveRefCode = (id) => {
    setLoading(true);
    AxiosInstanceProvider.get(`/caregiver/v1/retrieve-refcode/${id}`)
    .then(response => {
      setReferralCode(response.data?.referralCode);
      setReferralCodeUrl(response.data?.url);
    })
    .catch(error => {
        setOpenErrorDialog(true);
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  // const fetchReferralCode = async () => {
  //   await new Promise(resolve => setTimeout(resolve, 500));
  //   return "REF123456";
  // };

  const handleDialogClose = (action) => {
    if (action === 'OK') {
      window.location.href = '/provider-dashboard';
    }else if (action === 'error'){
      window.location.href = '/login-provider';
    }
    setOpenDialog(false);
  };

  return (
    
    <Container maxWidth="md" className="caregiver-registration-container">
      {!loading  && (
      <div>
      <Typography variant="h6" gutterBottom>
        Caregiver’s eligibility and registration
      </Typography>
     
      {showForm && referralCode == null && (
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
          <FormControl fullWidth margin="normal"
          error={!!errors.gender}
          // helperText={errors.gender}
          >
            <FormLabel>Gender</FormLabel>
            <RadioGroup name="gender" value={formData.gender} onChange={handleFormChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Others" control={<Radio />} label="Others" />
            </RadioGroup>
            {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>
          {/* <FormControl fullWidth margin="normal" error={!!errors.gender}>
                <FormLabel>
                  Gender <span style={{ color: "red" }}>*</span>
                </FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleFormChange}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Others"
                    control={<Radio />}
                    label="Others"
                  />
                </RadioGroup>
                {errors.gender && (
                  <Typography variant="body2" color="error">
                    {errors.gender}
                  </Typography>
                )}
              </FormControl> */}
          <Button variant="contained" color="primary" type="submit" className="submit-button">
          {similarProfiles ? "Submit Anyway" : "Submit"}
          </Button> 
          {/* <Button variant="contained" color="primary"  style={{ marginLeft: '10px' }}  onClick={() => navigate('/similar-users')}>
            Similiar Users Exists
          </Button> */}
        </form>
      )}

     {!showForm &&  (
      <form onSubmit={handleEligibilitySubmit}> 
      <FormControl component="fieldset" className="caregiver-form-group">
          <FormLabel component="legend">1. Do you have the caregiver’s consent to submit this referral form? </FormLabel>
          <RadioGroup name="caregiverconsent" value={eligibility.caregiverconsent} onChange={handleEligibilityChange}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className="caregiver-form-group">
          <FormLabel component="legend">2. Does the person this caregiver is providing care for have moderate dementia?</FormLabel>
          <RadioGroup name="moderateDementia" value={eligibility.moderateDementia} onChange={handleEligibilityChange}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={caregiverconsented !== true} />
            <FormControlLabel value="No" control={<Radio />} label="No" disabled={caregiverconsented !== true} />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className="caregiver-form-group">
          <FormLabel component="legend">3. Is the caregiver experiencing distress?</FormLabel>
          <RadioGroup name="experiencingDistress" value={eligibility.experiencingDistress} onChange={handleEligibilityChange}>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" disabled={caregiverconsented !== true} />
            <FormControlLabel value="No" control={<Radio />} label="No" disabled={caregiverconsented !== true} />
          </RadioGroup>
        </FormControl>
        <div className="submit-button-container">
          <Button variant="contained" color="primary" type="submit" className="eligibility-submit-button">
            Submit
          </Button>
        </div>
      </form>
      )}

   
   {!referralCode && !loading && similarProfiles && ( <div className="user-table-container">
      <h2>Similar Profle</h2>
      A similar caregiver record already exists. If your caregiver has already been referred to Health enSuite Caregiver, they should be listed below. Click to view their details. If this is a new caregiver, continue with the referral process.
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Referral Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName }</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.referralDate ? new Date(row.referralDate).toISOString().split("T")[0] : "N/A"}</td>
              <td>
                <button className="action-button get-refcode" onClick={() => handleGetRefCode(row.id)}>Get RefCode</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {openDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h3>Referral Code</h3>
            <p>Your referral code is: <strong>{referralCode}</strong></p>
            <button onClick={handleDialogClose}>Close</button>
          </div>
        </div>
      )}
    </div>)}

      {referralCode && !loading && (

          <div className="referral-code-container">
          <Typography variant="h6" gutterBottom>
            Health enSuite Caregivers
          </Typography>
          <Typography variant="body1">
              An online program for caregivers of people with dementia, currently being evaluated by researchers at the IWK Health Centre. 
          </Typography>
          <Divider sx={{ borderBottomWidth: 3 }} /> 
          <Typography variant="h6" gutterBottom>
            How to Access Health enSuite Caregivers
          </Typography>
          <Typography variant="body1">
            <ol>
              <li><b>Open a web browser </b>on your computer, tablet, or smartphone.</li>
              <li><b>Visit:</b> https://main.d374rejbccpaql.amplifyapp.com/referral-code-validation/</li>
              <li><b>Enter your referral code:</b> <br/> 
                  <b>Referral Code: </b>{referralCodeUrl} <br/>
                  This code verifies your identity and grants access to the program.
              </li>
              <li><b>Follow the on-screen instructions </b> to learn more about the Health enSuite Caregivers Study and decide if you would like to participate.</li>
            </ol>
          </Typography>
          <Divider sx={{ borderBottomWidth: 3 }} /> 
          <Typography variant="h6" gutterBottom>
             Need Help?
          </Typography>
          <Typography variant="body1">
            <ul>
              <li><b>Email: </b>TeamHealthEnSuite@iwk.nshealth.ca</li>
              <li><b>Phone: </b>(902) 470-7934</li>
              <li><b>Toll-Free: </b>1-877-341-8309, ext. 5</li>
            </ul>
          </Typography>
          <Typography variant="h6" gutterBottom>
              Lost This Instruction Sheet?
          </Typography>
          <Typography variant="body1">
             If you misplace these instructions, you can: <br/>
            <ul>
              <li><b>Request a new one </b>from your health care provider, or</li>
              <li><b>Contact the research team </b>by email or phone (details above).</li>
            </ul>
          </Typography>
          <Typography variant="body1">
            Best regards,<br />
            Health enSuite team
          </Typography>
          </div>

        // <div className="referral-code-container">
        //   <Typography variant="h6" gutterBottom>
        //    Referral Code and Instructions
        //   </Typography>
        //   <Typography variant="body1">
        //     Follow the steps below to learn more about how you can access Health enSuite Caregivers. It is an online program for caregivers of people with dementia that is currently being evaluated by a team of researchers based at the IWK Health Centre.
        //   </Typography>
        //   <Typography variant="body1">
        //     To access the Health enSuite Caregivers:
        //     <ol>
        //       <li>Open a web browser on your computer, tablet, or smartphone. Direct your browser to this address: <strong>{referralCodeUrl}</strong> </li>
        //       <li>Enter your referral code. This will be used to verify who you are. Your referral code is: <strong>{referralCode}</strong></li>
        //       <li>Follow the directions on the screen to learn more about the Health enSuite Caregivers Study and to decide whether you would like to participate.</li>
        //     </ol>
        //   </Typography>
        //   <Typography variant="body1">
        //     If you have any questions, you can contact the Health enSuite research team by email: TeamHealthEnSuite@iwk.nshealth.ca OR phone: (902) 470 7934 or call the toll-free number: 1-877-341-8309 ext 5.
        //   </Typography>
        //   <Typography variant="body1">
        //     If you misplace this instructions sheet, do not worry! You can either request your health care provider to issue a new one OR contact the Health enSuite research team by email: TeamHealthEnSuite@iwk.nshealth.ca OR phone: (902) 470 7934 or call the toll-free number: 1-877-341-8309 press 5.
        //   </Typography>
        //   <Typography variant="body1">
        //     Best regards,<br />
        //     Health enSuite team
        //   </Typography>
        // </div>
      )}

      <Dialog open={openDialog} onClose={() => handleDialogClose('Cancel')}>
        <DialogTitle>Eligibility Check</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This caregiver is not eligible for this tool. This tool is designed to support caregivers experiencing stress, and providing care for a person with moderate dementia.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={() => handleDialogClose('Cancel')} color="primary">
            Cancel
          </Button> */}
          {/* <Button onClick={() => handleNotEligible('OK')} color="primary">
            OK
          </Button> */}
          <Button onClick={() => handleNotEligible()} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog open={openErrorDialog} onClose={() => handleDialogClose('error')}>
        <DialogTitle>Unsuccessful</DialogTitle>
        <DialogContent>
          <DialogContentText>
            For some reason you can't create an account now. Login then try again, if it persists contact admin
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose('error')} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!caregiverconsented} onClose={() => handleNoConsent('error')}>
        <DialogTitle>Consent Required</DialogTitle>
        <DialogContent>
          <DialogContentText>
          This caregver is not eligible. You need to have the caregiver's consent to submit this referral form.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleNoConsent('error')} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      )}
      {loading && (
      <div>
        <LoadingComponent/>
      </div>
      )}
    </Container>
  );
};

export default CaregiverRegistration;
