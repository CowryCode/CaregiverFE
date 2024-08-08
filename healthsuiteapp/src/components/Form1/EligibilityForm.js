import React, { useState, useEffect } from 'react';
import './EligibilityForm.css';
import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';

const EligibilityForm = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        age18: '',
        internetAccess: '',
        assistanceNeeded: [],
        encouragementNeeded: [],
        hourPerWeek: '',
        userID: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: [...prevData[name], value],
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: prevData[name].filter((item) => item !== value),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const jsonString = JSON.stringify(formData);
        console.log(jsonString);
        alert('Form data prepared as JSON:\n' + jsonString);

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
            window.location.href = '../Form2/index.html';  
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
        */
        // Temporary redirect for demonstration purposes
       // window.location.href = 'baseline-questionnaire-f1';
       submitToAPI();
    };
    const submitToAPI = () => {
        setLoading(true);
        const jsonString = JSON.stringify(formData);
        alert(`Caregiver API response :  ${jsonString}`);
        axiosInstance.post('/caregiver/v1/submit-eligibility-form', formData) 
        .then(response => {
            alert(`${response.data}`);
            window.location.href = 'consent-form';
        })
        .catch(error => {
            window.location.href = '/';
            console.error('Error', error);
        })
        .finally(() => {
          setLoading(false);
        });
      }

    return (
        <div className="container">
            {!loading && (
            <div className="form-container">
                <h2 className="text-center">Caregiver Eligibility Screening</h2>
                <form id="caregiverForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>1. Are you 18 years and older?</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="age18"
                                id="age18Yes"
                                value="yes"
                                checked={formData.age18 === 'yes'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="age18Yes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="age18"
                                id="age18No"
                                value="no"
                                checked={formData.age18 === 'no'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="age18No">No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>2. Do you have regular access to an Internet-connected device (tablet, computer, smartphone)?</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="internetAccess"
                                id="internetAccessYes"
                                value="yes"
                                checked={formData.internetAccess === 'yes'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="internetAccessYes">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="internetAccess"
                                id="internetAccessNo"
                                value="no"
                                checked={formData.internetAccess === 'no'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="internetAccessNo">No</label>
                        </div>
                    </div>
                    <div className="note">
                        As their disease progresses, persons living with dementia will experience changes in their memory and judgment. These changes will impact their ability to complete many tasks and activities independently.
                    </div>
                    <div className="form-group">
                        <label>3. Does the person with dementia you are caring for need assistance, encouragement, or reminders to complete any of the following activities because of memory or thinking problems?</label>
                        <div className="form-group ml-3">
                            <label>Assistance with activities such as:</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="assistanceNeeded"
                                    id="assistanceCooking"
                                    value="Cooking"
                                    checked={formData.assistanceNeeded.includes('Cooking')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="assistanceCooking">Cooking</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="assistanceNeeded"
                                    id="assistanceHouseWork"
                                    value="House or yard work"
                                    checked={formData.assistanceNeeded.includes('House or yard work')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="assistanceHouseWork">House or yard work</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="assistanceNeeded"
                                    id="assistanceTelephone"
                                    value="Using the telephone"
                                    checked={formData.assistanceNeeded.includes('Using the telephone')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="assistanceTelephone">Using the telephone</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="assistanceNeeded"
                                    id="assistanceDriving"
                                    value="Driving"
                                    checked={formData.assistanceNeeded.includes('Driving')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="assistanceDriving">Driving</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="assistanceNeeded"
                                    id="assistanceFinances"
                                    value="Managing finances"
                                    checked={formData.assistanceNeeded.includes('Managing finances')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="assistanceFinances">Managing finances</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="assistanceNeeded"
                                    id="assistanceMedications"
                                    value="Managing medications"
                                    checked={formData.assistanceNeeded.includes('Managing medications')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="assistanceMedications">Managing medications</label>
                            </div>
                        </div>
                        <div className="form-group ml-3">
                            <label>Encouragement or reminders to complete such activities as:</label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="encouragementNeeded"
                                    id="encouragementBathing"
                                    value="Bathing"
                                    checked={formData.encouragementNeeded.includes('Bathing')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="encouragementBathing">Bathing</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="encouragementNeeded"
                                    id="encouragementDressed"
                                    value="Getting dressed"
                                    checked={formData.encouragementNeeded.includes('Getting dressed')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="encouragementDressed">Getting dressed</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="encouragementNeeded"
                                    id="encouragementWalking"
                                    value="Walking"
                                    checked={formData.encouragementNeeded.includes('Walking')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="encouragementWalking">Walking</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="encouragementNeeded"
                                    id="encouragementToilet"
                                    value="Using the toilet"
                                    checked={formData.encouragementNeeded.includes('Using the toilet')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="encouragementToilet">Using the toilet</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="encouragementNeeded"
                                    id="encouragementEating"
                                    value="Eating"
                                    checked={formData.encouragementNeeded.includes('Eating')}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="encouragementEating">Eating</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>4. How many hours in a week are you providing care for this person with dementia?</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="hourPerWeek"
                                id="moreThan1Hour"
                                value="more than 1 hour per week"
                                checked={formData.hourPerWeek === 'more than 1 hour per week'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="moreThan1Hour">More than 1 hour per week</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="hourPerWeek"
                                id="lessThan1Hour"
                                value="less than 1 hour per week"
                                checked={formData.hourPerWeek === 'less than 1 hour per week'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="lessThan1Hour">Less than 1 hour per week</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            )}
            {loading && (
            <div>
                <LoadingComponent/>
            </div>
            )}
        </div>
        
    );
}

export default EligibilityForm;
