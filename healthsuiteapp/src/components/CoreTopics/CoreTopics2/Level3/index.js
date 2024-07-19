import React from "react";

import { Route, Routes } from "react-router-dom";
import StartingPage from "./StartPage";
import Level3OnePage1 from "./Level3One/Page1";
import Level3TwoPage1 from "./Level3Two/Page1";
import Level3TwoPage2 from "./Level3Two/Page2"
function Level3() {

    return(
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/level3one/page1" element={<Level3OnePage1 />} />
            <Route path="/level3two/page1" element={<Level3TwoPage1 />} />
            <Route path="/level3two/page2" element={<Level3TwoPage2 />} />
        </Routes>
    )
}

export default Level3