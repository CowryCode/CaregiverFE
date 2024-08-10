import React, { useState, useEffect } from 'react';
import './UserTable.css';

import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../apicall/AxiosInstance';

const UserDuplicateRecords = () => {
    const navigate = useNavigate();

  const [rows, setRows] = useState([
    { name: 'John Doe', age: 24,  gender: 'Active', refdate: 'June 24, 2023'},
    { name: 'John Doe', age: 24,  gender: 'Active', refdate: 'June 23, 2023'},
    { name: 'John Doe', age: 24,  gender: 'Active', refdate: 'June 24, 2023'}
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

    // axiosInstance.get('/endpoint') // Replace with your API endpoint
    // .then(response => {
    //     setData(response.data);
    // })
    // .catch(error => {
    //     console.error('There was an error making the GET request!', error);
    // });
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
    navigate(`/referral-code-validation`);
  };

  return (
    <div className="user-table-container">
      <h2>Similar Profle</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Referral Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.refdate}</td>
              <td>
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

export default UserDuplicateRecords;
