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
import Wishlist from './components/WishList/Wishlist';


import Registration from './components/Registration/Registration';
import CaregiverRegistration from './components/CaregiverRegistration/CaregiverRegistration';
import UserTable from './components/UserTable/UserTable';
import ReferralCodeValidation from './components/ReferralCodeValidation/ReferralCodeValidation';
import NeedAssessmentForm from './components/NeedAssessmentForm/NeedAssessmentForm';
import CoreTopics from './components/CoreTopics/CoreTopics';
import ConsentForm from './components/consent/ConsentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referral-code-validation" element={<ReferralCodeValidation />} />
        {/* <Route path="/form1" element={<Form1 />} /> */}
        <Route path="/eligibility-form" element={<EligibilityForm />} />
         {/* TODO: CONSENT FORM NEED TO BE CREATED */}
         <Route path="/consent-form" element={<ConsentForm />} />
         <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/baseline-questionnaire-f1" element={<BaselineQuestionnaireF1 />} />
        <Route path="/baseline-questionnaire-f2" element={<BaselineQuestionnaireF2 />} />
        <Route path="/baseline-questionnaire-f3" element={<BaselineQuestionnaireF3 />} />
        <Route path="/baseline-questionnaire-f4" element={<BaselineQuestionnaireF4 />} />
        <Route path="/need-assessment" element={<NeedAssessmentForm />} />
        <Route path="/caregiverregister" element={<CaregiverRegistration />} />
        <Route path="/usertable" element={<UserTable />} />
        <Route path="/library/*" element={<CoreTopics />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

  // "react": "^18.3.1", //Ignore
export default App;
