import React, { useState } from 'react';
import './Form4.css';

const Form4 = () => {
    const [formData, setFormData] = useState({
        handleMemoryLoss: '',
        dealWithFrustration: '',
        handleFutureProblems: '',
        relativeIndependent: '',
        careForRelative: '',
        payForServices: '',
        getAnswers: '',
        findOrganizations: '',
        arrangeServices: '',
        getAnswersRelativeCare: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
            window.location.href = '../Form5/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
        */

        window.location.href = '/Form5';
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="text-center">Family Caregivers' Self-Efficacy for Managing Dementia Form</h2>
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
                                    { question: '1. Handle any problems like memory loss', name: 'handleMemoryLoss' },
                                    { question: '2. Deal with frustrations of caring', name: 'dealWithFrustration' },
                                    { question: '3. Handle problems that come up in future', name: 'handleFutureProblems' },
                                    { question: '4. Do something to keep relative independent', name: 'relativeIndependent' },
                                    { question: '5. Care for relative without help from organizations or agencies', name: 'careForRelative' },
                                    { question: '6. Find ways to pay for services', name: 'payForServices' },
                                    { question: '7. Get answers to all questions about services', name: 'getAnswers' },
                                    { question: '8. Find organizations or agencies that provide services', name: 'findOrganizations' },
                                    { question: '9. Arrange for services yourself', name: 'arrangeServices' },
                                    { question: '10. Get answers to all your questions about your relative’s care', name: 'getAnswersRelativeCare' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form4;
