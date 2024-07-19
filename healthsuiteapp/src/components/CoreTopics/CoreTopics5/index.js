import React from "react";
import { Routes, Route } from "react-router-dom";
import StartingPage from "./StartingPage";
import Level1 from "./Level1";
import Level2 from "./Level2";

function CoreTopics5() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="level1/*" element={<Level1 />} />
      <Route path="level2/*" element={<Level2 />} />
    </Routes>
  );
}

export default CoreTopics5;