// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import EligibilityForm from './components/Form1/EligibilityForm';
import Form2 from './components/Form2/Form2';
import Form3 from './components/Form3/Form3';
import Form4 from './components/Form4/Form4';
import Form5 from './components/Form5/Form5';
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
        <Route path="/baseline-questionnaire" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/form5" element={<Form5 />} />
        <Route path="/caregiverregister" element={<CaregiverRegistration />} />
        <Route path="/usertable" element={<UserTable />} />
        <Route path="/need-assessment" element={<NeedAssessmentForm />} />
        <Route path="/library/*" element={<CoreTopics />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

  // "react": "^18.3.1", //Ignore
export default App;
