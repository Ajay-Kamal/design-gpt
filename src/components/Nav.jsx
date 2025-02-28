import React from "react";
import "../CSS/Navbar.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="/Fav Logo.svg" alt="logo" />
      </div>
      <div className="dynamic-island"></div>
      <button className="register">
        <p>Register</p>
      </button>
    </div>
  );
};

export default Nav;
