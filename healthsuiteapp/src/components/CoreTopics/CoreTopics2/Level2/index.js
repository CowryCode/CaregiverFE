import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartPage';
import Level2OnePage1 from './Level2One/Page1';
import Level2OnePage2 from './Level2One/Page2';
import Level2TwoPage1 from './Level2Two/Page1';
function Level2 () {
    return(
        <Routes>
            <Route path='/' element={<StartingPage />} />
            <Route path='/level2one/page1' element={<Level2OnePage1 />} />
            <Route path='/level2one/page2' element={<Level2OnePage2 />} />
            <Route path='/level2two/page1' element={<Level2TwoPage1 />} />
        </Routes>
    )
}

export default Level2