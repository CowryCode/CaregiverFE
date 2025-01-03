import React, { useState, useEffect } from "react";
import "./BaselineQuestionnaireF3.css";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from "../../utils/LocalStorageService";
import {getUserProfile} from '../../utils/localStorageHelpers';
import LogicRouter from "../../config/LogicRouter";
import { DialogContentText, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const BaselineQuestionnaireF3 = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const [qType, setQType] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const [formData, setFormData] = useState({
    handleMemoryLoss: "",
    dealWithFrustration: "",
    handleFutureProblems: "",
    relativeIndependent: "",
    careForRelative: "",
    payForServices: "",
    getAnswers: "",
    findOrganizations: "",
    arrangeServices: "",
    getAnswersRelativeCare: "",
    userID: 0
  });
  const [isLogicRouterComplete, setIsLogicRouterComplete] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateFormData(formData)) {
      setOpenErrorDialog(true)
    }else{
      setSubmit(true);
    }
    
  };

  const validateFormData = (data) => {
    for (const key in data) {
      if (data.hasOwnProperty(key) && (data[key] === '' || data[key] === 0)) {
        return false; // Return false if any value is empty or zero
      }
    }
    return true; // Return true if all fields are filled
  };

const handleDialogClose = () => {
    setOpenErrorDialog(false);
  };

  const confirmSubmit = (event) => {
    setSubmit(false);
    submitToAPI();
  }
  
  const updateUserID = (newUserID) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        userID: newUserID
    }));
  };

  useEffect(() => {
    // const userData = LocalStorageService.getItem('profile');
    //const userData = getUserProfile();
   
    
  
    const userData = getUserProfile();
    const qtype = userData.qtype;
    if(qtype !== 2 ){
      setLastPage(true);
      setQType(qtype);
    }
    if (userData) {
        updateUserID(userData.id);
    }
  
}, []);

const submitToAPI = () => {
    setLoading(true);

    axiosInstance.post('/caregiver/v1/save-b3questionnaire', formData) 
    .then(response => {
      if(lastPage){
        alert(`Submitted successfully`);
        if(qType < 2 ){ //LESS THAN 2 MEANS USER IS IN SIGNUP PROCESS (BASELINE QUESTIONNAIRE INCOMPLETE)
          window.location.href = '/login';
        }else{
          window.location.href = '/';
        }
        
      }else{
        window.location.href = '/baseline-questionnaire-f4';
      }
        
    })
    .catch(error => {
        alert(`Form processing unsuccessful  . . .`);
       // window.location.href = '/baseline-questionnaire-f1';
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
}

const handleLogicRouterComplete = () => {
  setIsLogicRouterComplete(true);
};

  return (
    <div>
    {!isLogicRouterComplete && (
       <LogicRouter onComplete={handleLogicRouterComplete} />
    )}
    {isLogicRouterComplete && (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      {!loading && (
      <div className="form-container">
        <h2 className="text-center">
           Family Caregivers' Self-Efficacy for Managing Dementia Form
        </h2>
        <p><string>How certain do you feel for handling the below situations? </string></p>
        <form id="dementiaForm" onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Not at all certain</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>Completely certain</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    question: "1. Handle any problems like memory loss",
                    name: "handleMemoryLoss",
                  },
                  {
                    question: "2. Deal with frustrations of caring",
                    name: "dealWithFrustration",
                  },
                  {
                    question: "3. Handle problems that come up in future",
                    name: "handleFutureProblems",
                  },
                  {
                    question: "4. Do something to keep relative independent",
                    name: "relativeIndependent",
                  },
                  {
                    question:
                      "5. Care for relative without help from organizations or agencies",
                    name: "careForRelative",
                  },
                  {
                    question: "6. Find ways to pay for services",
                    name: "payForServices",
                  },
                  {
                    question: "7. Get answers to all questions about services",
                    name: "getAnswers",
                  },
                  {
                    question:
                      "8. Find organizations or agencies that provide services",
                    name: "findOrganizations",
                  },
                  {
                    question: "9. Arrange for services yourself",
                    name: "arrangeServices",
                  },
                  {
                    question:
                      "10. Get answers to all your questions about your relative’s care",
                    name: "getAnswersRelativeCare",
                  },
                ].map((item, index) => (
                  <tr key={index}>
                    <td>{item.question}</td>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(
                      (value) => (
                        <td key={value}>
                          <input
                            type="radio"
                            name={item.name}
                            value={value}
                            onChange={handleChange}
                          />
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
          {lastPage ? "Submit" : "Next"}
          </button>
        </form>
      </div>
        )}
            {loading && (
            <div>
                <LoadingComponent/>
            </div>
            )}
      <Footer />
    </div>
    )}

      {submit && (
            <Dialog 
            open={submit} 
            disableEscapeKeyDown 
            onClose={(event, reason) => {
              if (reason !== 'backdropClick') return;
              // Prevent default close on backdrop click
            }}
          >
            <DialogTitle>Notice</DialogTitle>
            <DialogContent>
              <strong>
                  Thank you for completing the assessments, please check your email for the next step
             </strong>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={confirmSubmit}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
      )}

      <Dialog open={openErrorDialog} onClose={() => handleDialogClose()}>
        <DialogTitle>Incomplete Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kindly fill all field before submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose()} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BaselineQuestionnaireF3;
