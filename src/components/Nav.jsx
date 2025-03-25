import React from "react";
import { useStatus } from "./StatusProvider";
import "../CSS/Navbar.css";
import RegisterBtn from "./RegisterBtn";

const Nav = () => {
  const { status } = useStatus();

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="/Fav Logo.svg" alt="logo" />
      </div>
      <div className="dynamic-island-landing">
        <img src="/navbarUnion.svg" alt="navbarUnion" className="union" />
        <div className="navbar-text">
          <div className="navbar-center-text">{status.text}</div>
          <div className="navbar-side-text">{status.subText}</div>
        </div>
        <div className="home-button-bg">
          <button className="home-button">
            <img src="/home-icon.svg" alt="home-icon" className="home-icon" />
          </button>
        </div>
      </div>
      <RegisterBtn />
    </div>
  );
};

export default Nav;
