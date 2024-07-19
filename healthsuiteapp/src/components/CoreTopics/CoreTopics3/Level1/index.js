import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Level1OnePage1 from './Level1One/Page1';
import Level1OnePage2 from './Level1One/Page2';
import Level1OnePage3 from './Level1One/Page3';
import Level1TwoPage1 from './Level1Two/Page1';
import Level1TwoPage2 from './Level1Two/Page2'
import Level1TwoPage3 from './Level1Two/Page3'
import Level1ThreePage1 from './Level1Three/Page1'
import Level1ThreePage2 from './Level1Three/Page2'
import Level1ThreePage3 from './Level1Three/Page3'
import StartingPage from './StartPage';

function Level1() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="level1one/page1" element={<Level1OnePage1 />} />
      <Route path="level1one/page2" element={<Level1OnePage2 />} />
      <Route path="level1one/page3" element={<Level1OnePage3 />} />
      <Route path="level1two/page1" element={<Level1TwoPage1 />} />
      <Route path="level1two/page2" element={<Level1TwoPage2 />} />
      <Route path="level1two/page3" element={<Level1TwoPage3 />} />
      <Route path="level1three/page1" element={<Level1ThreePage1 />} />
      <Route path="level1three/page2" element={<Level1ThreePage2 />} />
      <Route path="level1three/page3" element={<Level1ThreePage3 />} />
        

    </Routes>
  );
}

export default Level1;
