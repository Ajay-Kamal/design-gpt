import React from "react";
import "../Navbar/NavBar.css";
import Disland from "../Dynamic Island/Disland";

const LogNavBar = () => {
  return (
      <nav className="nav">
        <div className="act-nav">
        <div className="nav__logo-container">
          <img src="./navbar-dd-logo.svg" alt="dd-logo" className="nav__logo" />
          <div className="nav__vertical-line"></div>
          <span className="nav__name">Loco-ai</span>
        </div>
        
        <Disland/>

        <div style={{width:"120px", height:"40px"}}></div>
        </div>
      </nav>
  );
};

export default LogNavBar;