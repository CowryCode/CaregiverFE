import React, { useState, useEffect } from 'react';
import './UserTable.css';
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const UserTable = () => {
  const [rows, setRows] = useState([
    { name: 'John Doe', status: 'Active', days: 4 }
    // Add more dummy data here as needed
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

  return (
    <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
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
                  <button className="action-button view-profile">View Profile</button>
                  <button className="action-button pause">Pause</button>
                  <button className="action-button get-refcode" onClick={() => handleGetRefCode(row.name)}>Get RefCode</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {openDialog && (
          <div className="dialog">
            <div className="dialog-content">
              <h3>Referral Code</h3>
              <p>Your referral code is: <strong>{referralCode}</strong></p>
              <button onClick={handleDialogClose}>Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserTable;
