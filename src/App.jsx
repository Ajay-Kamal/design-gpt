import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CompetitiveAnalysis from "./components/CompetitiveAnalysis";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/competitive-analysis" element={<CompetitiveAnalysis />} />
    </Routes>
  );
};

export default App;