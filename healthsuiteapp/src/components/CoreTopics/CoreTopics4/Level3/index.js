import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import Level3OnePage1 from './Level3One/Page1';
import Level3OnePage2 from './Level3One/Page2';
import Level3TwoPage1 from './Level3Two/Page1';
import Level3ThreePage1 from './Level3Three/Page1';
import Level3ThreePage2 from './Level3Three/Page2';

function Level3() {
    return (
        <Routes>
            <Route path='/' element={<StartingPage />} />
            <Route path='/level3one/page1' element={<Level3OnePage1 />} />
            <Route path='/level3one/page2' element={<Level3OnePage2 />} />
            <Route path='/level3two/page1' element={<Level3TwoPage1 />} />
            <Route path='/level3three/page1' element={<Level3ThreePage1 />} />
            <Route path='/level3three/page2' element={<Level3ThreePage2 />} />
        </Routes>
    );
}

export default Level3;
