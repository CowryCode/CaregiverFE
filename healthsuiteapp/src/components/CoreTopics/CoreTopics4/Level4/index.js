import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import Level4OnePage1 from './Level4One/Page1';
import Level4OnePage2 from './Level4One/Page2';
import Level4TwoPage1 from './Level4Two/Page1';
import Level4TwoPage2 from './Level4Two/Page2';
import Level4TwoPage3 from './Level4Two/Page3';
import Level4ThreePage1 from './Level4Three/Page1';
import Level4ThreePage2 from './Level4Three/Page2';
import Level4FourPage1 from './Level4Four/Page1';
import Level4FourPage2 from './Level4Four/Page2';
import Level4FivePage1 from './Level4Five/Page1';
import Level4FivePage2 from './Level4Five/Page2';

function Level4() {
    return (
        <Routes>
            <Route path='/' element={<StartingPage />} />
            <Route path='/level4one/page1' element={<Level4OnePage1 />} />
            <Route path='/level4one/page2' element={<Level4OnePage2 />} />
            <Route path='/level4two/page1' element={<Level4TwoPage1 />} />
            <Route path='/level4two/page2' element={<Level4TwoPage2 />} />
            <Route path='/level4two/page3' element={<Level4TwoPage3 />} />
            <Route path='/level4three/page1' element={<Level4ThreePage1 />} />
            <Route path='/level4three/page2' element={<Level4ThreePage2 />} />
            <Route path='/level4four/page1' element={<Level4FourPage1 />} />
            <Route path='/level4four/page2' element={<Level4FourPage2 />} />
            <Route path='/level4five/page1' element={<Level4FivePage1 />} />
            <Route path='/level4five/page2' element={<Level4FivePage2 />} />
        </Routes>
    );
}

export default Level4;
