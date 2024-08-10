import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BaselineQuestionnaireF4.css";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';

const BaselineQuestionnaireF4 = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    overallQuality: "",
    helpReduceStress: "",
    navigatingExperience: "",
    suggestToFriends: "",
    levelOfAssistance: "",
    usefulFeature: "",
    futureUse: "",
    comment: "",
  });
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
    const jsonString = JSON.stringify(formData);
    console.log(jsonString);
    alert("Form data prepared as JSON:\n" + jsonString);
    // API post request
    /*
        fetch('https://api.demo.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonString
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
            
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
        */
        submitToAPI()
  };

  const updateUserID = (newUserID) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        userID: newUserID
    }));
  };

  useEffect(() => {
    const userData = LocalStorageService.getItem('profile');
    if (userData) {
        updateUserID(userData.id);
    }
}, []);

const submitToAPI = () => {
    setLoading(true);

    axiosInstance.post('/caregiver/v1/save-b4questionnaire', formData) 
    .then(response => {
      alert(`Congratulations, you just completed the baseline questionnaire.`);
      navigate(`/registration`);
    })
    .catch(error => {
        alert(`Form processing unsuccessful  . . .`);
        console.error('Error', error);
    })
    .finally(() => {
      setLoading(false);
    });
}

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      {!loading && (
      <div className="form-container">
        <h2 className="text-center">
          Health enSuite – Caregivers Application Feedback Form
        </h2>
        <form id="feedbackForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              1. How would you rate the overall quality of Health enSuite
              Caregivers?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="overallQuality"
                value="Excellent"
                onChange={handleChange}
              />
              <label className="form-check-label">Excellent</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="overallQuality"
                value="Good"
                onChange={handleChange}
              />
              <label className="form-check-label">Good</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="overallQuality"
                value="Fair"
                onChange={handleChange}
              />
              <label className="form-check-label">Fair</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="overallQuality"
                value="Poor"
                onChange={handleChange}
              />
              <label className="form-check-label">Poor</label>
            </div>
          </div>
          <div className="form-group">
            <label>
              2. Does this app help you reduce the amount of distress you
              experience as a caregiver?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="helpReduceStress"
                value="Yes, definitely useful"
                onChange={handleChange}
              />
              <label className="form-check-label">Yes, definitely useful</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="helpReduceStress"
                value="Yes, mostly useful"
                onChange={handleChange}
              />
              <label className="form-check-label">Yes, mostly useful</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="helpReduceStress"
                value="No, not really useful"
                onChange={handleChange}
              />
              <label className="form-check-label">No, not really useful</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="helpReduceStress"
                value="No, definitely not useful"
                onChange={handleChange}
              />
              <label className="form-check-label">
                No, definitely not useful
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>
              3. How was your experience navigating the app and accessing the
              content you wanted?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="navigatingExperience"
                value="Very easy"
                onChange={handleChange}
              />
              <label className="form-check-label">Very easy</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="navigatingExperience"
                value="Easy"
                onChange={handleChange}
              />
              <label className="form-check-label">Easy</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="navigatingExperience"
                value="Satisfactory"
                onChange={handleChange}
              />
              <label className="form-check-label">Satisfactory</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="navigatingExperience"
                value="Difficult"
                onChange={handleChange}
              />
              <label className="form-check-label">Difficult</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="navigatingExperience"
                value="Very difficult"
                onChange={handleChange}
              />
              <label className="form-check-label">Very difficult</label>
            </div>
          </div>
          <div className="form-group">
            <label>
              4. Would you suggest this application to a friend or family member
              who is facing similar caregiver issues or difficulties?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="suggestToFriends"
                value="No, definitely not"
                onChange={handleChange}
              />
              <label className="form-check-label">No, definitely not</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="suggestToFriends"
                value="No, I don’t think so"
                onChange={handleChange}
              />
              <label className="form-check-label">No, I don’t think so</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="suggestToFriends"
                value="Yes, I think so"
                onChange={handleChange}
              />
              <label className="form-check-label">Yes, I think so</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="suggestToFriends"
                value="Yes, definitely"
                onChange={handleChange}
              />
              <label className="form-check-label">Yes, definitely</label>
            </div>
          </div>
          <div className="form-group">
            <label>
              5. How content are you with the level of assistance you have
              received from Health enSuite?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="levelOfAssistance"
                value="Quite dissatisfied"
                onChange={handleChange}
              />
              <label className="form-check-label">Quite dissatisfied</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="levelOfAssistance"
                value="Indifferent or mildly dissatisfied"
                onChange={handleChange}
              />
              <label className="form-check-label">
                Indifferent or mildly dissatisfied
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="levelOfAssistance"
                value="Mostly satisfied"
                onChange={handleChange}
              />
              <label className="form-check-label">Mostly satisfied</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="levelOfAssistance"
                value="Very satisfied"
                onChange={handleChange}
              />
              <label className="form-check-label">Very satisfied</label>
            </div>
          </div>
          <div className="form-group">
            <label>
              6. Which features of Health enSuite Caregivers did you find most
              useful?
            </label>
            <textarea
              className="form-control"
              name="usefulFeature"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>
              7. If you were to require assistance in the future, would you
              choose to utilize this app again?
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="futureUse"
                value="No, definitely not"
                onChange={handleChange}
              />
              <label className="form-check-label">No, definitely not</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="futureUse"
                value="No, I don’t think so"
                onChange={handleChange}
              />
              <label className="form-check-label">No, I don’t think so</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="futureUse"
                value="Yes, I think so"
                onChange={handleChange}
              />
              <label className="form-check-label">Yes, I think so</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="futureUse"
                value="Yes, definitely"
                onChange={handleChange}
              />
              <label className="form-check-label">Yes, definitely</label>
            </div>
          </div>
          <div className="form-group">
            <label>We also welcome your comments and suggestions.</label>
            <textarea
              className="form-control"
              name="comment"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
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
  );
};

export default BaselineQuestionnaireF4;
