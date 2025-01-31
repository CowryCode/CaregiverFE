import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button, TextField,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import "./Profile.css";
import LocalStorageService from "../../utils/LocalStorageService";
import {getUserProfile} from "../../utils/localStorageHelpers";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../apicall/AxiosInstance";
import LoadingComponent from "../loader/LoadingComponent";

const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    userName: "",
    province: "",
    email: "",
    phoneNumber: "",
    mailingAddress: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profile, setProfile] = useState({});

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  useEffect(() => {
   // const localprofile = LocalStorageService.getItem('profile');
    const localprofile = getUserProfile();

    // Using dummy data for now
    setProfileData({
      name: `${localprofile.firstName} ${localprofile.lastName}`,
      userName: "N/A",
      province: "N/A",
      email: localprofile.email,
      phoneNumber: localprofile.phoneNumber,
      mailingAddress: localprofile.mailAddress,
    });
  }, []);




  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };
  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };


  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const submitChange = (action) => {
     if(action === 'email'){
    //  setIsEditingEmail(false);
       updateEmailAPI(newEmail);
    }else{
     //  console.log(`THE Password: ${newPassword}`);
    //   setIsEditingPassword(false);
       updatePasswordAPI(newPassword);
   }
    
  };


const updateEmailAPI = (newEmail) => {
    setLoading(true);
        const payload = {
          email: newEmail,
        };
    axiosInstance.post('/caregiver/v1/update-email', payload) 
    .then(response => {
      logout();
    })
    .catch(error => {
        console.error('Error', error);
    }).finally(() => {
      setLoading(false);
    });
}


const updatePasswordAPI = (newPaasword) => {
  setLoading(true);
      const payload = {
        passWord: newPaasword,
      };
  axiosInstance.post('/caregiver/v1/update-password', payload) 
  .then(response => {
    logout();
  })
  .catch(error => {
      console.error('Error', error);
  }).finally(() => {
    setLoading(false);
  });
}

const logout = () => {
  LocalStorageService.clear();
  navigate(`/login`);
}

  const closeDialogue = () => {
    setIsEditingEmail(false);
    setIsEditingPassword(false);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <Header />
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}

      {!loading && (
      <Container maxWidth="sm" className="profile-container">

        <Card className="profile-card">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Profile Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={profileData.name} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Province"
                  secondary={profileData.province}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Email" secondary={profileData.email} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Phone Number"
                  secondary={profileData.phoneNumber}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Mailing Address"
                  secondary={profileData.mailingAddress}
                />
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleEditPasswordClick}
            >
              Change Password
            </Button>
            <Divider />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleEditEmailClick}
            >
              Change Email
            </Button>
          </CardContent>
        </Card>

        <Dialog open={isEditingEmail} onClose={() => closeDialogue()}>
         <DialogTitle>Update Email</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Once you change your email, you need to logout and login with the new email address;
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="New Email"
              type="text"
              fullWidth
              value={newEmail}
              onChange={handleEmailChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => closeDialogue()} color="primary">
              Cancel
            </Button>
            <Button onClick={() =>submitChange('email')} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={isEditingPassword} onClose={() => closeDialogue()}>
         <DialogTitle>Update Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Once you change your password, you need to logout and login with the new email address;
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="New Password"
              type="text"
              fullWidth
              value={newPassword}
              onChange={handlePasswordChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => closeDialogue()} color="primary">
              Cancel
            </Button>
            <Button onClick={() =>submitChange('passsword')} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
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

export default Profile;
