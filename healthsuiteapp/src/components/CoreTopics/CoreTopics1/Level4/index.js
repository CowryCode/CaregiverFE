import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './StartPage'
import Level4OnePage1 from './Level4One/Page1'
function Level4 () {

    return (
        <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/level4One/Page1' element={<Level4OnePage1 />} />
        </Routes>
    )

}

export default Level4;