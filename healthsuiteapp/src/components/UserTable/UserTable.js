import React, { useState, useEffect } from 'react';
import './UserTable.css';

const UserTable = () => {
  const [rows, setRows] = useState([
    { name: 'John Doe', status: 'Active', days: 4 }
    // Add more dummy data here as needed
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [referralCode, setReferralCode] = useState(null);

  useEffect(() => {
    // Fetch rows from API
    // fetch('/api/getRows')
    //   .then(response => response.json())
    //   .then(data => setRows(data))
    //   .catch(error => console.error('Error fetching rows:', error));
  }, []);

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
  );
};

export default UserTable;
