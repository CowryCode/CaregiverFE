import React, { useState, useEffect } from 'react';
import './BaselineQuestionnaireF2.css';
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';
import {getUserProfile} from '../../utils/localStorageHelpers';
import LogicRouter from '../../config/LogicRouter';
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
  } from '@mui/material';


const BaselineQuestionnaireF2 = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        enoughTime: '',
        patientNeedAhead: '',
        takeABreak: '',
        futurePlan: '',
        reasonBeyondControl: '',
        strainRelationship: '',
        dependent: '',
        tooDependent: '',
        upsetYou: '',
        feelingIrritable: '',
        breakPoint: '',
        strainFamilyRelationship: '',
        familyDriftingApart: '',
        feelingIsolated: '',
        notGettingSupport: '',
        yourFinancialSituation: '',
        patientFinancialSituation: '',
        extraCost: '',
        physicalHealth: '',
        patientPhysicalHealth: '',
        constantAnxiety: '',
        feelingDepressed: '',
        nothingPositive: '',
        lackOfSleep: '',
        keepingAwake: '',
        feelingExhausted: '',
        treatedDifferently: '',
        somethingRisky: '',
        threatening: '',
        harmingThemselves: '',
        dangerousSituations: '',
        relapsing: '',
        generalWellbeing: '',
        userID : 0
    });
    const [isLogicRouterComplete, setIsLogicRouterComplete] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
   

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
            // alert('Please fill in all fields before submitting.');
            setOpenErrorDialog(true)
           // return;
        }else{
            submitToAPI();
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

    const updateUserID = (newUserID) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            userID: newUserID
        }));
    };

    useEffect(() => {
        // const currentPath = location.pathname;
        // const userMatch = currentPath.match(/user=(\d+)/);
        // if (userMatch && userMatch[1]) {
        //     const userId = userMatch[1];
        //     updateUserID(userId);
        // } else {
        //     console.log("User ID not found.");
        // } 

        const userData = getUserProfile();
        if (userData) {
            updateUserID(userData.id);
        }

    }, []);

    const submitToAPI = () => {
        setLoading(true);
        console.log("Sidebar is ", formData );

        axiosInstance.post('/caregiver/v1/save-b2questionnaire', formData) 
        .then(response => {
            window.location.href = '/baseline-questionnaire-f3';
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
        <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
            <button className="sidebar-toggle" onClick={handleSidebarToggle}>
                <FaBars />
            </button>
            {isSidebarOpen && <Sidebar />}
            <Header />
            {!loading && (
            <div className="form-container">
                <h2 className="text-center"> <strong>Carer Well-being and Support (CWS) Questionnaire</strong></h2>
                <p>The questions in this section are about aspects of your general well-being. All of the questions are about how you have been over the past four weeks.</p>
                <p>We recognise that some carers may be caring for more than one person with dementia. For each question, tick one box on each line that best reflects your caring responsibilities as a whole.</p>
                <h4><strong>Your role as a carer</strong></h4>
                <p>The first set of questions asks about your role as a carer. (Please tick one box on each line.)</p>
                <form id="cwsForm" onSubmit={handleSubmit}>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about:</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '1. Not having enough time to yourself?', name: 'enoughTime' },
                                    { question: '2. Having to put the needs of the person you care for ahead of your own needs?', name: 'patientNeedAhead' },
                                    { question: '3. Not being able to take a break from caring?', name: 'takeABreak' },
                                    { question: '4. Not being able to plan for the future?', name: 'futurePlan' },
                                    { question: '5. Not being able to continue caring due to reasons beyond your control (e.g. becoming ill yourself, looking after very young children)?', name: 'reasonBeyondControl' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Your relationship with the person you care for</strong></h4>
                    <p>The next questions are about your relationship with the person you care for. (Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '6. Strains in your relationship with the person you care for?', name: 'strainRelationship' },
                                    { question: '7. The person you care for being too dependent on you at the moment?', name: 'dependent' },
                                    { question: '8. The person you care for becoming too dependent on you in the future?', name: 'tooDependent' },
                                    { question: '9. The person you care for saying things that upset you?', name: 'upsetYou' },
                                    { question: '10. Feeling irritable with the person you care for?', name: 'feelingIrritable' },
                                    { question: '11. Reaching “breaking point”, where you feel you can’t carry on with things as they are?', name: 'breakPoint' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Your relationships with family and friends</strong></h4>
                    <p>The next questions are about your relationships with family and friends. (Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '12. Strains in your relationships with family and friends, because of your caring responsibilities?', name: 'strainFamilyRelationship' },
                                    { question: '13. “Drifting apart” from family and friends, because your caring responsibilities limit the time available to keep in contact with them?', name: 'familyDriftingApart' },
                                    { question: '14. Feeling isolated and lonely because of the situation you are in?', name: 'feelingIsolated' },
                                    { question: '15. Not getting the support you need from family and friends?', name: 'notGettingSupport' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Your financial situation</strong></h4>
                    <p>The next questions are about your financial situation. (Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '16. Your own financial situation?', name: 'yourFinancialSituation' },
                                    { question: '17. The financial situation of the person you care for?', name: 'patientFinancialSituation' },
                                    { question: '18. Having to cover extra costs of caring (e.g. extra help in the home, trips to hospital)?', name: 'extraCost' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Your physical health</strong></h4>
                    <p>The next questions are about your physical health. (Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '19. Your own physical health?', name: 'physicalHealth' },
                                    { question: '20. Your caring role making your physical health worse?', name: 'patientPhysicalHealth' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Your emotional well-being</strong></h4>
                    <p>The next questions are about your emotional well-being. (Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '21. Being unable to cope with the “constant anxiety” of caring?', name: 'constantAnxiety' },
                                    { question: '22. Feeling depressed?', name: 'feelingDepressed' },
                                    { question: '23. Being unable to see anything positive in your life?', name: 'nothingPositive' },
                                    { question: '24. Lack of sleep brought about through worry or stress?', name: 'lackOfSleep' },
                                    { question: '25. Lack of sleep caused by the person you care for keeping you awake at night?', name: 'keepingAwake' },
                                    { question: '26. Feeling so exhausted that you can’t function properly?', name: 'feelingExhausted' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Stigma and discrimination</strong></h4>
                    <p>(Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>27. People treating you differently because of the illness/condition of the person you care for?</td>
                                    {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                        <td key={value}>
                                            <input type="radio" name="treatedDifferently" value={value} onChange={handleChange} />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Your own safety</strong></h4>
                    <p>(Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about the person you care for…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '28. Accidentally doing something that puts you at risk (e.g. leaving the gas on)?', name: 'somethingRisky' },
                                    { question: '29. Being aggressive or threatening towards you (e.g. verbal threats, sexual aggression, physical intimidation)?', name: 'threatening' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>The safety of the person you care for</strong></h4>
                    <p>(Please tick one box on each line.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>During the past 4 weeks, how concerned were you about the person you care for…</th>
                                    <th>A lot</th>
                                    <th>Quite a bit</th>
                                    <th>Moderately</th>
                                    <th>A little</th>
                                    <th>Not at all</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { question: '30. Harming themselves?', name: 'harmingThemselves' },
                                    { question: '31. Getting themselves into dangerous situations?', name: 'dangerousSituations' },
                                    { question: '32. Relapsing or deteriorating, such that it puts their safety at risk?', name: 'relapsing' },
                                ].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.question}</td>
                                        {['Alot', 'Quite a bit', 'Moderately', 'A little', 'Not at all'].map((value) => (
                                            <td key={value}>
                                                <input type="radio" name={item.name} value={value} onChange={handleChange} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h4><strong>Overall general well-being</strong></h4>
                    <p>(Please tick one box only.)</p>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>33. Overall, how would you rate your general well-being during the past 4 weeks?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {['Excellent', 'Very good', 'Good', 'Fair'].map((value) => (
                                    <tr key={value}>
                                        <td>
                                            <input type="radio" name="generalWellbeing" value={value} onChange={handleChange} /> {value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default BaselineQuestionnaireF2;
