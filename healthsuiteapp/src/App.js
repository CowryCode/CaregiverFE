import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form1 from './components/Form1/Form1';
import Form2 from './components/Form2/Form2';
import Form3 from './components/Form3/Form3';
import Form4 from './components/Form4/Form4';
import Form5 from './components/Form5/Form5';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import CaregiverRegistration from './components/CaregiverRegistration/CaregiverRegistration';
import UserTable from './components/UserTable/UserTable';
import ReferralCodeValidation from './components/ReferralCodeValidation/ReferralCodeValidation';
import NeedAssessmentForm from './components/NeedAssessmentForm/NeedAssessmentForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/form1" element={<Form1 />} />
                <Route path="/form2" element={<Form2 />} />
                <Route path="/form3" element={<Form3 />} />
                <Route path="/form4" element={<Form4 />} />
                <Route path="/form5" element={<Form5 />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/caregiverregister' element={<CaregiverRegistration />} />
                <Route path='/usertable' element={<UserTable />} />
                <Route path='/referral-code-validation' element={<ReferralCodeValidation />} />
                <Route path='/need-assessment' element={<NeedAssessmentForm />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
