import React from "react";
import { Routes, Route } from "react-router-dom";
import StartingPage from "./StartingPage";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";

function CoreTopics2() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="level1/*" element={<Level1 />} />
      <Route path="level2/*" element={<Level2 />} />
      <Route path="level3/*" element={<Level3 />} />
    </Routes>
  );
}

export default CoreTopics2;
