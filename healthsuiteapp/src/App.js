// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import EligibilityForm from './components/Form1/EligibilityForm';
import BaselineQuestionnaireF1 from './components/Form2/BaselineQuestionnaireF1';
import BaselineQuestionnaireF2 from './components/Form3/BaselineQuestionnaireF2';
import BaselineQuestionnaireF3 from './components/Form4/BaselineQuestionnaireF3';
import BaselineQuestionnaireF4 from './components/Form5/BaselineQuestionnaireF4';
import Login from './components/Login/Login';
import QuickTips from './components/WishList/QuickTips';
import Profile from './components/Profile/Profile';
import Feedback from './components/Feedback/Feedback';
import Registration from './components/Registration/Registration';
import CaregiverRegistration from './components/CaregiverRegistration/CaregiverRegistration';
import UserTable from './components/UserTable/UserTable';
import ReferralCodeValidation from './components/ReferralCodeValidation/ReferralCodeValidation';
import NeedAssessmentForm from './components/NeedAssessmentForm/NeedAssessmentForm';
import CoreTopics from './components/CoreTopics/CoreTopics';
import ConsentForm from './components/consent/index';
import WebSocketComponent from './components/notification/WebSocketComponent'
import UserDuplicateRecords from './components/UserTable/UserDuplicateRecords';
import VoluntaryWithdrawal from './components/VoluntaryWithdrawal/VoluntaryWithdrawal';
import ContactUs from './components/ContactUs/ContactUs';import LoadingComponent from './components/loader/LoadingComponent';

function App() {
  return (
    <Router>
      <WebSocketComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caregiverregister" element={<CaregiverRegistration />} />
        <Route path="/similar-users" element={<UserDuplicateRecords />} /> 
        <Route path="/referral-code-validation" element={<ReferralCodeValidation />} />
        <Route path="/eligibility-form" element={<EligibilityForm />} />
         <Route path="/consent-form/*" element={<ConsentForm />} />
        <Route path="/baseline-questionnaire-f1" element={<BaselineQuestionnaireF1 />} />
        <Route path="/baseline-questionnaire-f2" element={<BaselineQuestionnaireF2 />} />
        <Route path="/baseline-questionnaire-f3" element={<BaselineQuestionnaireF3 />} />
        <Route path="/baseline-questionnaire-f4" element={<BaselineQuestionnaireF4 />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/need-assessment" element={<NeedAssessmentForm />} />
        <Route path="/admin" element={<UserTable />} />
        <Route path="/library/*" element={<CoreTopics />} />
        <Route path="/quicktips" element={<QuickTips />} />
        <Route path="/withdraw" element={<VoluntaryWithdrawal />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<ContactUs />} />0
      </Routes>
    </Router>
  );
}

  // "react": "^18.3.1", //Ignore
export default App;
