import React, { useState, useEffect } from "react";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Tabs, Tab, Box } from "@mui/material";

const UserTable = () => {
  const [rows, setRows] = useState([
    { subject: "My Goal ", content: "flkvhsdlkhmn kdshlk jdhs khdsk  jkdhsg sdk hd kz jkhdzlh kl llvjkdzhv kkhlkdzh vljhjkl zxh hjzhlkvh hjxhlvzk vjh kjxhvl hgfgzvfurusyuiv vuygdlvhfZ vlgh vlgvkydfugvlfh;kh hvldfgkvzgf uvgldzhg vufkd ggkfjhgvl hjvgdflhfgh:hfdsudshasfc hsgvkhGSilsdg  sdvjgVKJSHGDv jghdsvl,jsJBJvdklshb lkhsfl khsfk"},
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
    return (
        <div className="user-table-container">
          <h2>My Goals</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Goal Subject</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.subject}</td>
                  <td>{row.content}</td>
                  <td>
                    <button
                      className="action-button get-refcode"
                      onClick={() => handleGetRefCode(row.name)}
                    >
                      Completed
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
