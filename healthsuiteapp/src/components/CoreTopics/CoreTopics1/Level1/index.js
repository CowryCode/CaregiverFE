// src/components/CoreTopics/CoreTopics1/Level1/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Level1OnePage1 from './Level1One/Page1';
import Level1TwoPage1 from './Level1Two/Page1';
import Level1TwoPage2 from './Level1Two/Page2'
import Level1TwoPage3 from './Level1Two/Page3'
import StartingPage from './StartPage';

function Level1() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="level1one/page1" element={<Level1OnePage1 />} />
      <Route path="level1two/page1" element={<Level1TwoPage1 />} />
      <Route path="level1two/page2" element={<Level1TwoPage2 />} />
      <Route path="level1two/page3" element={<Level1TwoPage3 />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default Level1;
