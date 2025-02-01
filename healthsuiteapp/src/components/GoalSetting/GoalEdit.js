import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import "./GoalSetting.css";
import LocalStorageService from "../../utils/LocalStorageService";
import axiosInstance from "../../apicall/AxiosInstance";
import LoadingComponent from "../loader/LoadingComponent";
import { useLocation } from 'react-router-dom';


const GoalEdit = () => {

  const location = useLocation();
  const userGoal = location.state?.goal;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false); // message: "",
  const [feedbackData, setFeedbackData] = useState({
    id: userGoal.id,
    subject: userGoal.subject,
    content: userGoal.content,
    userID: 0
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (feedbackData.subject.trim() === "" || feedbackData.content.trim() === "") {
      alert("You have not made any update");
      return;
    }

    submitToAPI();
    console.log("Feedback submitted:", feedbackData);
  };

  const updateUserID = (newUserID) => {
    setFeedbackData((prevFormData) => ({
        ...prevFormData,
        userID: newUserID
    }));
  };

  useEffect(() => {
    const userData = LocalStorageService.getItem('profile');
    if (userData) {
        updateUserID(userData.id);
    }
}, []);

const submitToAPI = () => {
    setLoading(true);
    axiosInstance.post('/caregiver/v1/update-goal', feedbackData)
    .then(response => {
      LocalStorageService.saveGoals(response);
      navigate(`/goals`);
    })
    .catch(error => {
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
}

  // const handleCloseDialog = () => {
  //   setShowSuccess(false);
  // };

  const handleChange = (event) => {
    setFeedbackData({
      ...feedbackData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      {!loading && (
        <div>
      <Container maxWidth="sm" className="feedback-form-container">
        <Typography variant="h6" gutterBottom>
          Edit Goal
        </Typography>
        <Typography variant="body1" gutterBottom>
          Update the goal as neccessary
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Write your Goal"
            name="subject"
            value={feedbackData.subject}
            // value={userGoal.subject}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="SMART Goal "
            placeholder="Describe your goal: What do you want to achieve? How will you track it? Is it realistic and relevant? When will you complete it?"
            multiline
            rows={4}
            name="content"
            value={feedbackData.content}
            // value={userGoal.content}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        
          {/* {showSuccess && (
            <Dialog open={showSuccess} onClose={handleCloseDialog}>
              <DialogTitle>Feedback Submitted</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Thank you for your feedback. We appreciate your effort in helping us improve.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )} */}
        </form>
      </Container>
      </div>
        )}
            {loading && (
            <div>
                <LoadingComponent/>
            </div>
            )}
      <Footer />
    </div>
  );
};

export default GoalEdit;
