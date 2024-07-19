import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import Level2OnePage1 from './Level2One/Page1';
import Level2OnePage2 from './Level2One/Page2';
import Level2TwoPage1 from './Level2Two/Page1';
import Level2TwoPage2 from './Level2Two/Page2';
import Level2ThreePage1 from './Level2Three/Page1';
import Level2ThreePage2 from './Level2Three/Page2';

function Level2() {
    return (
        <Routes>
            <Route path='/' element={<StartingPage />} />
            <Route path='/level2one/page1' element={<Level2OnePage1 />} />
            <Route path='/level2one/page2' element={<Level2OnePage2 />} />
            <Route path='/level2two/page1' element={<Level2TwoPage1 />} />
            <Route path='/level2two/page2' element={<Level2TwoPage2 />} />
            <Route path='/level2three/page1' element={<Level2ThreePage1 />} />
            <Route path='/level2three/page2' element={<Level2ThreePage2 />} />
        </Routes>
    );
}

export default Level2;
