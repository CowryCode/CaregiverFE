import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import "./Video.css";

const Video = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      <Container maxWidth="md" className="video-container">
        <Card className="video-card">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              <strong>Smart Goal Video </strong> 
            </Typography>
            <Box className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                // src="https://www.youtube.com/embed/wnHW6o8WMas?si=gpLiIBgHveSMJVcj"
                // title="YouTube video player"
                src="https://insomnia2.s3.ca-central-1.amazonaws.com/assets/caregiver-assets/goalsetting.mp4"
                title="Smart Goals"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Video;
