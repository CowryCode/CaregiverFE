import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartPage';
import Level2OnePage1 from './Level2One/Page1';
import Level2OnePage2 from './Level2One/Page2';
import Level2OnePage3 from './Level2One/Page3';
import Level2TwoPage1 from './Level2Two/Page1';
import Level2TwoPage2 from './Level2Two/Page2';
import Level2TwoPage3 from './Level2Two/Page3';
import Level2ThreePage1 from './Level2Three/Page1'; 
import Level2ThreePage2 from './Level2Three/Page2'; 
import Level2ThreePage3 from './Level2Three/Page3';
import Level2FourPage1 from './Level2Four/Page1'; 
import Level2FourPage2 from './Level2Four/Page2'; 
import Level2FourPage3 from './Level2Four/Page3';
import Level2FivePage1 from './Level2Five/Page1';
import Level2FivePage2 from './Level2Five/Page2';
import Level2FivePage3 from './Level2Five/Page3';
import Level2SixPage1 from './Level2Six/Page1';
import Level2SixPage2 from './Level2Six/Page2';
import Level2SevenPage1 from './Level2Seven/Page1';
import Level2SevenPage2 from './Level2Seven/Page2';
import Level2SevenPage3 from './Level2Seven/Page3';
import Level2EightPage1 from './Level2Eight/Page1';
import Level2EightPage2 from './Level2Eight/Page2';
import Level2EightPage3 from './Level2Eight/Page3';

function Level2() {
    return (
        <Routes>
            <Route path='/' element={<StartingPage />} />
            <Route path='/level2one/page1' element={<Level2OnePage1 />} />
            <Route path='/level2one/page2' element={<Level2OnePage2 />} />
            <Route path='/level2one/page3' element={<Level2OnePage3 />} />
            <Route path='/level2two/page1' element={<Level2TwoPage1 />} />
            <Route path='/level2two/page2' element={<Level2TwoPage2 />} />
            <Route path='/level2two/page3' element={<Level2TwoPage3 />} />
            <Route path='/level2three/page1' element={<Level2ThreePage1 />} />
            <Route path='/level2three/page2' element={<Level2ThreePage2 />} />
            <Route path='/level2three/page3' element={<Level2ThreePage3 />} />
            <Route path='/level2four/page1' element={<Level2FourPage1 />} />
            <Route path='/level2four/page2' element={<Level2FourPage2 />} />
            <Route path='/level2four/page3' element={<Level2FourPage3 />} />
            <Route path='/level2five/page1' element={<Level2FivePage1 />} />
            <Route path='/level2five/page2' element={<Level2FivePage2 />} />
            <Route path='/level2five/page3' element={<Level2FivePage3 />} />
            <Route path='/level2six/page1' element={<Level2SixPage1 />} />
            <Route path='/level2six/page2' element={<Level2SixPage2 />} />
            <Route path='/level2seven/page1' element={<Level2SevenPage1 />} />
            <Route path='/level2seven/page2' element={<Level2SevenPage2 />} />
            <Route path='/level2seven/page3' element={<Level2SevenPage3 />} />
            <Route path='/level2eight/page1' element={<Level2EightPage1 />} />
            <Route path='/level2eight/page2' element={<Level2EightPage2 />} />
            <Route path='/level2eight/page3' element={<Level2EightPage3 />} />
        </Routes>
    );
}

export default Level2;
