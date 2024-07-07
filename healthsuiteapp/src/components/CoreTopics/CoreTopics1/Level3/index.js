// src/components/CoreTopics/CoreTopics1/Level2/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Level3OnePage1 from './Level3One/Page1';
import Level3OnePage2 from './Level3One/Page2';
import Level3OnePage3 from './Level3One/Page3';
import Level3TwoPage1 from './Level3Two/Page1';
import Level3TwoPage2 from './Level3Two/Page2'
import Level3TwoPage3 from './Level3Two/Page3'
import Level3ThreePage1 from './Level3Three/Page1'
import Level3FourPage1 from './Level3Four/Page1';
import Level3FourPage2 from './Level3Four/Page2';
import Level3FivePage1 from './Level3Five/Page1';
import Level3FivePage2 from './Level3Five/Page2';
import Level3FivePage3 from './Level3Five/Page3';
import StartingPage from './StartPage';

function Level3() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="level3one/page1" element={<Level3OnePage1 />} />
      <Route path="level3one/page2" element={<Level3OnePage2 />} />
      <Route path="level3one/page3" element={<Level3OnePage3 />} />
      <Route path="level3two/page1" element={<Level3TwoPage1 />} />
      <Route path="level3two/page2" element={<Level3TwoPage2 />} />
      <Route path="level3two/page3" element={<Level3TwoPage3 />} />
      <Route path="level3three/page1" element={<Level3ThreePage1 />} />
      <Route path="level3Four/page1" element={<Level3FourPage1 />} />
      <Route path="level3Four/page2" element={<Level3FourPage2 />} />
      <Route path="level3Five/page1" element={<Level3FivePage1 />} />
      <Route path="level3Five/page2" element={<Level3FivePage2 />} />
      <Route path="level3Five/page3" element={<Level3FivePage3 />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default Level3;
