import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
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
import "./Feedback.css";
import axiosInstance from "../../apicall/AxiosInstance";

const Feedback = () => {
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    subject: "",
    message: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (feedbackData.subject.trim() === "" || feedbackData.message.trim() === "") {
      alert("Please provide both subject and message");
      return;
    }
    setShowSuccess(true);
    submitToAPI();
    console.log("Feedback submitted:", feedbackData);
  };

  const handleCloseDialog = () => {
    setShowSuccess(false);
    navigate(`/`);
  };

  const handleChange = (event) => {
    setFeedbackData({
      ...feedbackData,
      [event.target.name]: event.target.value,
    });
  };

  const submitToAPI = () => {
    axiosInstance.post(`/caregiver/v1/save-feedback`, feedbackData) 
    .then(response => {
      // navigate(`/`);
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
      <Container maxWidth="sm" className="feedback-form-container">
        <Typography variant="h6" gutterBottom>
          Feedback
        </Typography>
        <Typography variant="body1" gutterBottom>
          We would love to hear your thoughts, suggestions, concerns, or problems with anything so we can improve!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Subject"
            name="subject"
            value={feedbackData.subject}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            placeholder="Please share your feedback"
            multiline
            rows={4}
            name="message"
            value={feedbackData.message}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {showSuccess && (
            <Dialog open={showSuccess} onClose={handleCloseDialog}>
              <DialogTitle>Feedback Submitted</DialogTitle>
              <DialogContent>
                <DialogContentText>
                Thank you. Your feedback has been shared with the team.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default Feedback;
