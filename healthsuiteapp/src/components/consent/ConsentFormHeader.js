import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Button } from '@mui/material';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ConsentFormHeader = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/consent-form/consentform-page2'); // Make sure the path is correct based on your routing setup
  };

  return (
    <>
    <Header />
    <Container maxWidth="sm" sx={{ marginTop: 4, paddingBottom: 8 }} >
      <Typography variant="h6" gutterBottom component="div">
        Online Consent Form
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        <strong>Study Information</strong>
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <strong>Research Title:</strong> Evaluating app-based treatments for distressed caregivers caring for persons with moderate dementia: Health enSuite Caregivers application study
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <strong>Research Team</strong>
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        Principal Investigator: Dr. Patrick McGrath, OC, PhD, FRSC, FCAHS<br />
        Centre for Research in Family Health, IWK Health Centre
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <strong>Co-investigators:</strong><br />
        Dr. Cathy MacLean, MCIsc, MD, CCFP, FCFP, MBA<br />
        Academic Family Medicine, University of Saskatchewan<br /><br />
        Jaisheen Kour Reen, B.Tech, MCS<br />
        Centre for Research in Family Health, IWK Health Centre<br /><br />
        Dr. Fatemeh Baghbani-Naghadehi, PhD<br />
        Centre for Research in Family Health, IWK Health Centre
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <strong>Research Consultants:</strong><br />
        Dr. Janice Keefe, PhD<br />
        Nova Scotia Centre on Aging - Mount Saint Vincent University
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <strong>Funding</strong><br />
        This project is funded by the Canadian Institutes of Health Research (CIHR).
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        <strong>How to contact the research team?</strong><br />
        Email: TeamHealthEnSuite@iwk.nshealth.ca<br />
        Phone: (902) 470 7934 or call toll-free number: 1-877-341-8309 press 5,<br />
        Available Monday – Friday, between 9 a.m. to 5 p.m. Atlantic Time
      </Typography>
      <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: 20}}>
        Next
      </Button>
    </Container>
    <Footer />
    </>
  );
};

export default ConsentFormHeader;
