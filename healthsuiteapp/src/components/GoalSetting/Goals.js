import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocalStorageService from "../../utils/LocalStorageService";
import { Box, Button } from '@mui/material';
import { amber, green } from '@mui/material/colors';
import axiosInstance from "../../apicall/AxiosInstance";
import { Container } from "@mui/system";

// function getGoals() {
//     const goalsJSON = LocalStorageService.getGoals();
//     return goalsJSON ? JSON.parse(goalsJSON) : [];
// }

const Goals = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [goalId, setGoalId] = useState(0);


  useEffect(() => {
    const goalsJSON = LocalStorageService.getGoals();
    setGoals(goalsJSON);
    if (goalsJSON.length > 0) {
       setLoading(false);
    }else{
      setLoading(true);
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleComplete = async (id) => {
    setOpenDialog(true);
    setGoalId(id)
  };

  const updateGoal = (goal) => {
    navigate('/edit-goals', { state: { goal } })
  };

  const handleDialogClose = () => {
    submitToAPI();
    setOpenDialog(false);
  };

  const submitToAPI = () => {
    axiosInstance.get(`/caregiver/v1/complete-goals/${goalId}`) 
    .then(response => {
     LocalStorageService.saveGoals(response);
      navigate(`/goals`);
    })
    .catch(error => {
        console.error('Error', error);
    });
  }

  const renderContent = () => {
    return (
        <div className="user-table-container">
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            border={0}
            borderColor="grey.300"
        >
            <h2>My Goals</h2>
            
            <Button sx={{
                backgroundColor: green[500],
                color: 'white',
                '&:hover': {
                    backgroundColor: amber[700],
                },
            }}  onClick={() => navigate("/goalsetting")}>Set New Goals
            </Button>
        </Box>


          
          {!loading && (
          <table className="user-table">
            <thead>
              <tr>
                <th>Goal Subject</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {goals.map((row, index) => (
                <tr key={index}>
                  <td>{row.subject}</td>
                  <td>{row.content}</td>
                  <td>
                  <Button sx={{
                backgroundColor: amber[500],
                color: 'white',
                '&:hover': {
                    backgroundColor: green[700],
                },
                }} onClick={() => handleComplete(row.id)}>
                    Mark as Complete
                </Button>
                <Button sx={{
                backgroundColor: green[500],
                color: 'white',
                '&:hover': {
                    backgroundColor: green[700],
                },
                }} onClick={() => updateGoal(row)}>
                    Update
                </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            )}
            {loading && (
            <div>
                {/* <LoadingComponent/> */}
                <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', 
                // backgroundColor: 'lightgrey', 
            }}
        >
            <Box
                sx={{
                    width: '300px',
                    height: '200px',
                    backgroundColor: 'white',
                    // border: '1px solid grey',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                No Task Yet
            </Box>
        </Box>
            </div>
            )}

          {openDialog && (
            <div className="dialog">
              <div className="dialog-content">
                {/* <h3>Referral Code</h3> */}
                <p>
                <strong>Are you sure you want to complete this task?</strong>
                </p>
                <button onClick={handleDialogClose}>Yes</button>
              </div>
            </div>
          )}
        </div>
      );
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      <Container>
      <div className="tab-content">{renderContent()}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default Goals;
