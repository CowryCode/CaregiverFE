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
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import "./VoluntaryWithdrawal.css";

const VoluntaryWithdrawal = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [withdrawalReason, setWithdrawalReason] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (withdrawalReason.trim() === "") {
      alert("Please provide a reason for withdrawal");
      return;
    }
    setShowSuccess(true);
    console.log("Withdrawal reason submitted:", withdrawalReason);
  };

  const handleCloseDialog = () => {
    setShowSuccess(false);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <Header />
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Container maxWidth="sm" className="withdrawal-form-container">
        <Typography variant="h6" gutterBottom>
          Voluntary Withdrawal
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please let us know why you are withdrawing from the study:
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Tell us why you are withdrawing"
            placeholder="Tell us why you are withdrawing"
            multiline
            rows={4}
            value={withdrawalReason}
            onChange={(e) => setWithdrawalReason(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {showSuccess && (
            <Dialog open={showSuccess} onClose={handleCloseDialog}>
              <DialogTitle>Submission Completed</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Thank you for your feedback. Your withdrawal reason has been
                  submitted successfully.
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

export default VoluntaryWithdrawal;
