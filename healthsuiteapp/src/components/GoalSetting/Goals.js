import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocalStorageService from "../../utils/LocalStorageService";
import LoadingComponent from "../loader/LoadingComponent";
import { Box, Button } from '@mui/material';
import { amber, green } from '@mui/material/colors';

function getGoals() {
    const goalsJSON = LocalStorageService.getGoals();
    return goalsJSON ? JSON.parse(goalsJSON) : [];
}

const UserTable = () => {
    const navigate = useNavigate();
  const [rows, setRows] = useState([
    { subject: "My Goal ", content: "flkvhsdlkhmn kdshlk jdhs khdsk  jkdhsg sdk hd kz jkhdzlh kl llvjkdzhv kkhlkdzh vljhjkl zxh hjzhlkvh hjxhlvzk vjh kjxhvl hgfgzvfurusyuiv vuygdlvhfZ vlgh vlgvkydfugvlfh;kh hvldfgkvzgf uvgldzhg vufkd ggkfjhgvl hjvgdflhfgh:hfdsudshasfc hsgvkhGSilsdg  sdvjgVKJSHGDv jghdsvl,jsJBJvdklshb lkhsfl khsfk"},
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [referralCode, setReferralCode] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const goalsJSON = LocalStorageService.getGoals();
    console.log("Retrieved Goals 2 : " + goalsJSON);  
    setGoals(goalsJSON);
    if (goalsJSON.length > 0) {
       setLoading(false);
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleComplete = async (name) => {
    // Simulate API call
    // const response = await fetch('/api/getRefCode', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ name })
    // });
    // const data = await response.json();
    // setReferralCode(data.referralCode);

    // Dummy referral code for demonstration
    setReferralCode("REF123456");
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setReferralCode(null);
  };

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
                    Incomplete
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
                <h3>Referral Code</h3>
                <p>
                  Your referral code is: <strong>{referralCode}</strong>
                </p>
                <button onClick={handleDialogClose}>Close</button>
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
      <div className="tab-content">{renderContent()}</div>
      <Footer />
    </div>
  );
};

export default UserTable;
