import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConsentFormHeader from './ConsentFormHeader';
import ConsentFormPage2 from './ConsentFormPage2';
import ConsentFormPage3 from './ConsentFormPage3';
import ConsentFormPage4 from './ConsentFormPage4';
import ConsentFormPage5 from './ConsentFormPage5';
import ConsentFormPage6 from './ConsentFormPage6';
import ConsentFormPage7 from './ConsentFormPage7';
import ConsentFormPage8 from './ConsentFormPage8';
import ConsentFormPage9 from './ConsentFormPage9';
import ConsentFormPage10 from './ConsentFormPage10';
import ConsentFormPage11 from './ConsentFormPage11';
import ConsentFormPage12 from './ConsentFormPage12';
import ConsentFormPage13 from './ConsentFormPage13';
import ConsentFormPage14 from './ConsentFormPage14';
import ConsentFormPage15 from './ConsentFormPage15';
import ConsentFormPage16 from './ConsentFormPage16';
import ConsentFormPage17 from './ConsentFormPage17';
import ConsentFormPage18 from './ConsentFormPage18';
import ConsentFormPage19 from './ConsentFormPage19';

function ConsentForm() {
  return (
    <Routes>
      <Route path="/" element={<ConsentFormHeader />} />
      <Route path='/consentform-page2' element={<ConsentFormPage2 />} />
      <Route path='/consentform-page3' element={<ConsentFormPage3 />} />
      <Route path='/consentform-page4' element={<ConsentFormPage4 />} />
      <Route path='/consentform-page5' element={<ConsentFormPage5 />} />
      <Route path='/consentform-page6' element={<ConsentFormPage6 />} />
      <Route path='/consentform-page7' element={<ConsentFormPage7 />} />
      <Route path='/consentform-page8' element={<ConsentFormPage8 />} />
      <Route path='/consentform-page9' element={<ConsentFormPage9 />} />
      <Route path='/consentform-page10' element={<ConsentFormPage10 />} />
      <Route path='/consentform-page11' element={<ConsentFormPage11 />} />
      <Route path='/consentform-page12' element={<ConsentFormPage12 />} />
      <Route path='/consentform-page13' element={<ConsentFormPage13 />} />
      <Route path='/consentform-page14' element={<ConsentFormPage14 />} />
      <Route path='/consentform-page15' element={<ConsentFormPage15 />} />
      <Route path='/consentform-page16' element={<ConsentFormPage16 />} />
      <Route path='/consentform-page17' element={<ConsentFormPage17 />} />
      <Route path='/consentform-page18' element={<ConsentFormPage18 />} />
      <Route path='/consentform-page19' element={<ConsentFormPage19 />} />
      
    </Routes>
  );
}

export default ConsentForm;
