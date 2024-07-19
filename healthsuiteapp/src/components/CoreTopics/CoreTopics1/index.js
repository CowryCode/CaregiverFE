// src/components/CoreTopics/CoreTopics1/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';

function CoreTopics1() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="level1/*" element={<Level1 />} />
      <Route path="level2/*" element={<Level2 />} />
      <Route path="level3/*" element={<Level3 />} />
      <Route path='level4/*' element={<Level4 />} />
      
    </Routes>
  );
}

export default CoreTopics1;
