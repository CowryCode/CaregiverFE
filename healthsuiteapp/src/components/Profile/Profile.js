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
} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import "./Profile.css";
import LocalStorageService from "../../utils/LocalStorageService";

const Profile = () => {
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

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  useEffect(() => {
    const localprofile = LocalStorageService.getItem('profile');

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

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <Header />
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
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
              {/* <Divider />
              <ListItem>
                <ListItemText
                  primary="Username"
                  secondary={profileData.userName}
                />
              </ListItem> */}
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
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
