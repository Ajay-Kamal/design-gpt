import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CompetitiveAnalysis from "./components/CompetitiveAnalysis";
import Login from "./components/Registeration/Login";
import SignUp from "./components/Registeration/SignUp";
import OTPverf from "./components/Registeration/OTPverf"
import ProfilePage from "./components/Profile.jsx/Profile";
import AvatarSelection from "./components/Registeration/Avatar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/competitive-analysis" element={<CompetitiveAnalysis />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp-verify" element={<OTPverf/>}/>
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/avatar-section" element={<AvatarSelection/>}/>
    </Routes>
  );
};

export default App;