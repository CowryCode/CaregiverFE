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

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  useEffect(() => {
    // Fetch profile data from the backend
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('YOUR_BACKEND_ENDPOINT');
    //     const data = await response.json();
    //     setProfileData(data);
    //   } catch (error) {
    //     console.error('Error fetching profile data:', error);
    //   }
    // };

    // fetchData();

    // Using dummy data for now
    setProfileData({
      name: "John Doe",
      userName: "john.doe@example.com",
      province: "Ontario",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      mailingAddress: "1234 Elm Street, Springfield, IL 62704",
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
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Username"
                  secondary={profileData.userName}
                />
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
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
