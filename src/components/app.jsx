import React from "react";
import Home from "./home";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bride from "./bride";
import Second from "./second";
import Third from "./third";

function App() {
  return (
      <div>
          <BrowserRouter>
                <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/second' element={<Second />}></Route>
          <Route exact path='/third' element={<Third />}></Route>
          <Route exact path='/story' element={<Bride />}></Route>
                  {/* <Route exact path='/groom' element={<Groom />}></Route> */}
                </Routes>
          </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/" element={<Sidebar />}>
            <Route exact path="/" element={<Dropzone />}></Route>
            <Route exact path="/analyseresults" element={<Tabs />}>
              <Route
                exact
                path="/analyseresults/waterfall/:data/:analysisType"
                element={<Waterfall />}
              ></Route>
            </Route>
            <Route exact path="/riskscoreanalysis" element={<RiskScoreAnalysis />}></Route>
            <Route exact path="/loansummary/:data" element={<LoanSummary />}></Route>
            <Route exact path="/history/:data" element={<LoanHistory />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
          {/* <Home /> */}
    </div>
  );
}

export default App;
