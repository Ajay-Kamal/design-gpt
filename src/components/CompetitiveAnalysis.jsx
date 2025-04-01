import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "./Navbar/NavBar";
import Popup from "./Popup/Popup";
import "../CSS/CompAnalysis.css";

const CompetitiveAnalysis = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
    >
      <NavBar />
      <SideBar />
      <Popup />
    </div>
  );
};

export default CompetitiveAnalysis;
