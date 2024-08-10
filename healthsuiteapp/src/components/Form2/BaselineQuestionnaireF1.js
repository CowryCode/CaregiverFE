import React, { useState, useEffect } from 'react';
import './BaselineQuestionnaireF1.css';
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';

const BaselineQuestionnaireF1 = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        postalCode: '',
        maritalStatus: '',
        levelOfEducation: '',
        employmentStatus: [],
        numberOfChildren: '',
        relationshipToDementiaPerson: '',
        dementiaPersonAge: '',
        dementiaPersonIdentity: '',
        chronicHealthCondition: [],
        liveWithDementiaPerson: '',
        proximityToPatient: '',
        supportDurationYears: '',
        supportDurationMonths: '',
        hoursPerWeek: '',
        hoursPerTypicalWeek: '',
        typicalWeekDetail: '',
        userID : 0
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
            }));
        } else if (type === 'radio') {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const jsonString = JSON.stringify(formData);
        console.log(jsonString);
        alert('Form data prepared as JSON:\n' + jsonString);

        // API post request
        fetch('http://localhost:8081/caregiver/v1/save-baseline-questionnaire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Form submitted successfully!');
            //window.location.href = '../Form4/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
        ///submitToAPI();
    };

    const submitToAPI = () => {
        setLoading(true);

        const payload = {
            postalCode: formData.postalCode,
            maritalStatus: formData.maritalStatus,
            levelOfEducation: formData.levelOfEducation,
            employmentStatus: 'DEMO',
            numberOfChildren: 0,
            // relationshipToDementiaPerson: formData.relationshipToDementiaPerson,
            // dementiaPersonAge: 0,
            // dementiaPersonIdentity: formData.dementiaPersonIdentity,
            // chronicHealthCondition: 'DEMO',
            // liveWithDementiaPerson: false,
            // proximityToPatient: formData.proximityToPatient,
            // supportDurationYears: formData.supportDurationYears,
            // supportDurationMonths: formData.supportDurationMonths,
            // hoursPerWeek: 0,
            // hoursPerTypicalWeek: 0,
            // typicalWeekDetail: '',
            userID : 0
        };

        


        axiosInstance.post('/save-baseline-questionnaire', payload) 
        .then(response => {
            window.location.href = '/baseline-questionnaire-f2';
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

    return (
        <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
            <button className="sidebar-toggle" onClick={handleSidebarToggle}>
                <FaBars />
            </button>
            {isSidebarOpen && <Sidebar />}
            <Header />
            {!loading && (
            <div className="form-container">
                <h2 className="text-center">Background Information Form</h2>
                <form id="backgroundForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="postalCode">1. What are the first 3 letters of your postal code?</label>
                        <input type="text" className="form-control" id="postalCode" name="postalCode" maxLength="3" value={formData.postalCode} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>2. What is your current marital status?</label><br />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="maritalStatus" id="married" value="Married or common law" checked={formData.maritalStatus === 'Married or common law'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="married">Married or common law</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="maritalStatus" id="single" value="Single, never married" checked={formData.maritalStatus === 'Single, never married'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="single">Single, never married</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="maritalStatus" id="separated" value="Separated or divorced" checked={formData.maritalStatus === 'Separated or divorced'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="separated">Separated or divorced</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="maritalStatus" id="widowed" value="Widow or widower" checked={formData.maritalStatus === 'Widow or widower'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="widowed">Widow or widower</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>3. What is the highest level of schooling/education that you have successfully completed?</label><br />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="8thGrade" value="8th grade or less" checked={formData.levelOfEducation === '8th grade or less'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="8thGrade">8th grade or less</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="12thGradeNoDiploma" value="9th-12th grade, no diploma" checked={formData.levelOfEducation === '9th-12th grade, no diploma'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="12thGradeNoDiploma">9th-12th grade, no diploma</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="highSchoolGraduate" value="High school graduate or GED completed" checked={formData.levelOfEducation === 'High school graduate or GED completed'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="highSchoolGraduate">High school graduate or GED completed</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="tradeCertificate" value="Trade certificate or diploma from a vocational school or apprenticeship training" checked={formData.levelOfEducation === 'Trade certificate or diploma from a vocational school or apprenticeship training'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="tradeCertificate">Trade certificate or diploma from a vocational school or apprenticeship training</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="communityCollege" value="Non-university certificate or diploma from a community college, CEGEP, school of nursing, etc." checked={formData.levelOfEducation === 'Non-university certificate or diploma from a community college, CEGEP, school of nursing, etc.'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="communityCollege">Non-university certificate or diploma from a community college, CEGEP, school of nursing, etc.</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="associateDegree" value="University certificate below bachelor’s level (e.g., Associate degree)" checked={formData.levelOfEducation === 'University certificate below bachelor’s level (e.g., Associate degree)'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="associateDegree">University certificate below bachelor’s level (e.g., Associate degree)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="bachelorDegree" value="Bachelor’s degree" checked={formData.levelOfEducation === 'Bachelor’s degree'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="bachelorDegree">Bachelor’s degree</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="masterDegree" value="Master’s degree" checked={formData.levelOfEducation === 'Master’s degree'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="masterDegree">Master’s degree</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="doctorateDegree" value="Doctorate or professional degree" checked={formData.levelOfEducation === 'Doctorate or professional degree'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="doctorateDegree">Doctorate or professional degree</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="levelOfEducation" id="otherEducation" value="Other" checked={formData.levelOfEducation === 'Other'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="otherEducation">Other (please specify):
                                <input type="text" className="form-control mt-2" name="otherEducationDetail" value={formData.otherEducationDetail} onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>4. What is your current employment status? Please check all that apply.</label><br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="fullTime" value="Working– Full Time" checked={formData.employmentStatus.includes('Working– Full Time')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="fullTime">Working– Full Time</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="partTime" value="Working– Part time" checked={formData.employmentStatus.includes('Working– Part time')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="partTime">Working– Part time</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="unemployed" value="Unemployed" checked={formData.employmentStatus.includes('Unemployed')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="unemployed">Unemployed</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="retired" value="Retired" checked={formData.employmentStatus.includes('Retired')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="retired">Retired</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="disabled" value="Disabled, permanently or temporarily" checked={formData.employmentStatus.includes('Disabled, permanently or temporarily')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="disabled">Disabled, permanently or temporarily</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="caregiver" value="Stay at home parent / Caregiver (unpaid)" checked={formData.employmentStatus.includes('Stay at home parent / Caregiver (unpaid)')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="caregiver">Stay at home parent / Caregiver (unpaid)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="student" value="Student" checked={formData.employmentStatus.includes('Student')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="student">Student</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="employmentStatus" id="otherEmployment" value="Other" checked={formData.employmentStatus.includes('Other')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="otherEmployment">Other (please specify):
                                <input type="text" className="form-control mt-2" name="otherEmploymentDetail" value={formData.otherEmploymentDetail} onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>5. How many children living in your home?</label>
                        <input type="number" className="form-control" name="numberOfChildren" value={formData.numberOfChildren} onChange={handleChange} />
                    </div>
                    <h5>Questions about your role as a caregiver and the person with dementia:</h5>
                    <div className="form-group">
                        <label>6. What is your relationship to the person with dementia?</label>
                        <input type="text" className="form-control" name="relationshipToDementiaPerson" value={formData.relationshipToDementiaPerson} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>7. How old is this person?</label>
                        <input type="number" className="form-control" name="dementiaPersonAge" value={formData.dementiaPersonAge} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>8. What is this person’s gender identity?</label>
                        <input type="text" className="form-control" name="dementiaPersonIdentity" value={formData.dementiaPersonIdentity} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>9. Does this person have any chronic health conditions other than dementia? Please check all that apply.</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="noHealthProblems" value="No health problems other than dementia" checked={formData.chronicHealthCondition.includes('No health problems other than dementia')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="noHealthProblems">No health problems other than dementia</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="cardiovascular" value="Cardiovascular disease (e.g. congestive heart failure, coronary artery disease, angina, myocardial infarction, arrhythmia, atrial fibrillation, etc.)" checked={formData.chronicHealthCondition.includes('Cardiovascular disease (e.g. congestive heart failure, coronary artery disease, angina, myocardial infarction, arrhythmia, atrial fibrillation, etc.)')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="cardiovascular">Cardiovascular disease (e.g. congestive heart failure, coronary artery disease, angina, myocardial infarction, arrhythmia, atrial fibrillation, etc.)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="respiratory" value="Respiratory disease (e.g., asthma, COPD, emphysema, etc.)" checked={formData.chronicHealthCondition.includes('Respiratory disease (e.g., asthma, COPD, emphysema, etc.)')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="respiratory">Respiratory disease (e.g., asthma, COPD, emphysema, etc.)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="neurological" value="Neurological disease (e.g., Parkinson’s, stroke, ALS, etc.)" checked={formData.chronicHealthCondition.includes('Neurological disease (e.g., Parkinson’s, stroke, ALS, etc.)')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="neurological">Neurological disease (e.g., Parkinson’s, stroke, ALS, etc.)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="diabetes" value="Diabetes (e.g., Type 1 or Type 2)" checked={formData.chronicHealthCondition.includes('Diabetes (e.g., Type 1 or Type 2)')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="diabetes">Diabetes (e.g., Type 1 or Type 2)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="chronicPain" value="Chronic pain (e.g., back pain, joint pain, nerve pain, etc.)" checked={formData.chronicHealthCondition.includes('Chronic pain (e.g., back pain, joint pain, nerve pain, etc.)')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="chronicPain">Chronic pain (e.g., back pain, joint pain, nerve pain, etc.)</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="chronicHealthCondition" id="otherChronicCondition" value="Other" checked={formData.chronicHealthCondition.includes('Other')} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="otherChronicCondition">Other (please specify):
                                <input type="text" className="form-control mt-2" name="otherChronicConditionDetail" value={formData.otherChronicConditionDetail} onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>10. Do you live with this person?</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="liveWithDementiaPerson" id="liveYes" value="yes" checked={formData.liveWithDementiaPerson === 'yes'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="liveYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="liveWithDementiaPerson" id="liveNo" value="no" checked={formData.liveWithDementiaPerson === 'no'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="liveNo">No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>If no, what is the approximate distance in kilometers between your residences?</label>
                        <input type="number" className="form-control" name="proximityToPatient" value={formData.proximityToPatient} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>11. Approximately how long have you been providing support for this person?</label>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="supportDurationYears">Years</label>
                                <input type="number" className="form-control" id="supportDurationYears" name="supportDurationYears" placeholder="Years" value={formData.supportDurationYears} onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label htmlFor="supportDurationMonths">Months</label>
                                <input type="number" className="form-control" id="supportDurationMonths" name="supportDurationMonths" placeholder="Months" value={formData.supportDurationMonths} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>12. In the past week, how many hours per week did you spend supporting this person either by doing tasks for him/her, providing emotional support, or supervision?</label>
                        <input type="number" className="form-control" name="hoursPerWeek" value={formData.hoursPerWeek} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>13. Was this a typical week for you?</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="hoursPerTypicalWeek" id="typicalWeekYes" value="yes" checked={formData.hoursPerTypicalWeek === 'yes'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="typicalWeekYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="hoursPerTypicalWeek" id="typicalWeekNo" value="no" checked={formData.hoursPerTypicalWeek === 'no'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="typicalWeekNo">No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>If no, what is:</label>
                        <input type="text" className="form-control" name="typicalWeekDetail" value={formData.typicalWeekDetail} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Next</button>
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

export default BaselineQuestionnaireF1;
