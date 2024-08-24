import React, { useState, useEffect } from "react";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Tabs, Tab, Box } from "@mui/material";

const UserTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rows, setRows] = useState([
    { name: "John Doe", status: "Active", days: 4 },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [referralCode, setReferralCode] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch rows from API
    // fetch('/api/getRows')
    //   .then(response => response.json())
    //   .then(data => setRows(data))
    //   .catch(error => console.error('Error fetching rows:', error));
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleGetRefCode = async (name) => {
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
    switch (activeTab) {
      case 0:
        return (
          <div className="user-table-container">
            <h2>User Management</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>No. Days</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.status}</td>
                    <td>{row.days}</td>
                    <td>
                      <button className="action-button view-profile">
                        View Profile
                      </button>
                      <button className="action-button pause">Pause</button>
                      <button
                        className="action-button get-refcode"
                        onClick={() => handleGetRefCode(row.name)}
                      >
                        Get RefCode
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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
      case 1:
        return (
          <div className="add-user-container">
            <h2>Add User</h2>
            <form>
              <div>
                <label>Name:</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div>
                <label>Status:</label>
                <select>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label>Days:</label>
                <input type="number" placeholder="Enter number of days" />
              </div>
              <button type="submit">Add User</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="reports-container">
            <h2>User Reports</h2>
            <p>Placeholder for user-related reports or statistics.</p>
          </div>
        );
      case 3:
        return (
          <div className="settings-container">
            <h2>User Settings</h2>
            <p>Placeholder for user management settings.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => setActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
          sx={{
            "& .MuiTabs-indicator": {
              display: "none", // This hides the default underline
            },
            "& .Mui-selected": {
              // Styles for the selected tab
              backgroundColor: "#e0f7fa", // Change this to your desired background color for selected tab
              color: "#0d47a1", // Optional: change text color for selected tab
            },
          }}
        >
          <Tab style={{marginLeft: "5px"}} label="Overview" />
          <Tab label="Add User" />
          <Tab label="Reports" />
          <Tab label="Settings" />
        </Tabs>
      </Box>

      <div className="tab-content">{renderContent()}</div>
      <Footer />
    </div>
  );
};

export default UserTable;
