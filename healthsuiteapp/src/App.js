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
import CompleteCareGiverProfile from './components/Registration/CompleteCareGiverProfile';
import Page3 from './components/Test/Page3';
import Video from './components/Video/Video';
import InstallPWA from './utils/installpwa'; 
import GoalSetting from './components/GoalSetting/GoalSetting';
import Goals from './components/GoalSetting/Goals'
import BookMarks from './components/BookMark/bookmarks';
import LoginProvider from './components/Login/LoginProvider';
import CoreTopicsHome from './components/CoreTopics/CoreTopicsHome';
import CaregiverRegistrationEligibility from './components/CaregiverRegistration/CaregiverRegistrationEligibility';
import RecoverRefCode from './components/CaregiverRegistration/RecoverRefCode';

function App() {
  return (
    <Router>
      <WebSocketComponent />
      {/* <InstallPWA /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/test' element={<Page3 />} />
        <Route path="/caregiverregister-eligibility" element={<CaregiverRegistrationEligibility/>} />
        <Route path="/caregiverregister" element={<CaregiverRegistration />} />
        <Route path="/recover-refcode" element={<RecoverRefCode />} />
        <Route path="/similar-users" element={<UserDuplicateRecords />} /> 
        <Route path="/referral-code-validation" element={<ReferralCodeValidation />} />
        <Route path="/eligibility-form" element={<EligibilityForm />} />
         <Route path="/consent-form/*" element={<ConsentForm />} />
        <Route path="/baseline-questionnaire-f1/*" element={<BaselineQuestionnaireF1 />} />
        <Route path="/baseline-questionnaire-f2/*" element={<BaselineQuestionnaireF2 />} />
        <Route path="/baseline-questionnaire-f3/*" element={<BaselineQuestionnaireF3 />} />
        <Route path="/baseline-questionnaire-f4/*" element={<BaselineQuestionnaireF4 />} />
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route path="/user-complete-profile/*" element={<CompleteCareGiverProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-provider" element={<LoginProvider />} />
        <Route path="/need-assessment/*" element={<NeedAssessmentForm />} />
        <Route path="/admin" element={<UserTable />} />
        <Route path="/library/*" element={<CoreTopics/>} />
        <Route path="/library/home" element={<CoreTopicsHome/>} />
        <Route path="/quicktips" element={<QuickTips />} />
        <Route path="/goalsetting" element={<GoalSetting />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/bookmarks" element={<BookMarks />} />
        <Route path="/withdraw" element={<VoluntaryWithdrawal />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/video" element={<Video />} />
        <Route path="/install" element={<InstallPWA />} />
      </Routes>
    </Router>
  );
}

  // "react": "^18.3.1", //Ignore this
export default App;
