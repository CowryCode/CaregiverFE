import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import "./ContactUs.css";
import axiosInstance from "../../apicall/AxiosInstance";

const ContactUs = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and submission logic here
    submitToAPI();
    //setShowSuccess(true);
  };

  const handleCloseDialog = () => {
    setShowSuccess(false);
    navigate(`/`);
  };

  const submitToAPI = () => {
    
    axiosInstance.post(`/caregiver/v1/contact-us`, formData) 
    .then(response => {
      setShowSuccess(true);
      
    })
    .catch(error => {
        console.error('Error', error);
    });
  }

  return (
    <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      <Container maxWidth="sm" className="contactus-container">
        <Card className="contactus-card">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Have questions or comments? Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
       {/* {showSuccess && ( */}
       <Dialog open={showSuccess} onClose={handleCloseDialog}>
                <DialogTitle>Message Sent</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Thank you for reaching out to us. We have received your message and will get back to you shortly.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary" >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            {/* )} */}
      <Footer />
    </div>
  );
};

export default ContactUs;
