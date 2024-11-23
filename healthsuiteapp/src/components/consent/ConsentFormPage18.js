import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert,
  Box,
} from '@mui/material';

const ConsentFormPage18 = () => {
  const navigate = useNavigate();
  const [checkedState, setCheckedState] = useState(new Array(10).fill(false));
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    if (updatedCheckedState.every(Boolean)) {
      setErrorMessage('');
    }
  };

  const handleNext = () => {
    if (checkedState.every(Boolean)) {
      navigate('/consent-form/consentform-page19');
    } else {
      setErrorMessage('All checkboxes are mandatory');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 , paddingBottom: 8 }}>
      <Typography variant="h6" gutterBottom>
        Participant Consent:
      </Typography>
      <Typography paragraph>
        Please click beside each statement if you AGREE.
      </Typography>
      <FormGroup>
        {[
          "I have read this Information and Consent Form.",
          "I have had the chance to ask questions which have been answered to my satisfaction before agreeing to take part.",
          "I was given sufficient time to think about participating.",
          "I understand the nature of the study that this study may not provide any benefits to me, and I understand the potential risks.",
          "I understand that I have the right to withdraw from the study at any time without affecting my care.",
          "I understand that I will receive a copy of this Consent Form via email at the address that I provide.",
          "I give permission for the use and disclosure of my de-identified personal health information collected for the research purposes described in this form.",
          "I give my permission to be contacted by a member or members of the research team from an NSH Webmail account or an NSH cell phone by research staff to communicate during this study.",
          "I give permission for the access of my identifiable personal health information for the research purposes described in this form.",
          "I agree to inform and update the research team if my phone number and/or my email address changes."
        ].map((label, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox checked={checkedState[index]} onChange={() => handleCheckboxChange(index)} />}
            label={label}
            sx={{ alignItems: 'start', marginLeft: 0, mb: 1 }} // Adjust margin for better alignment and space between items
          />
        ))}
      </FormGroup>
      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ mt: 2 }}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default ConsentFormPage18;
