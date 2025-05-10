import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "./Navbar/NavBar";
import Popup from "./Popup/Popup";

const CompetitiveAnalysis = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw", backgroundColor: "#191919" }}
    >
      <SideBar />
      <Popup />
      <NavBar />
    </div>
  );
};

export default CompetitiveAnalysis;
