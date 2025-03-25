import React from "react";
import "./SidebarCSS/sidebarcomp.css";

const SideBarComp = ({ icon, text }) => {
  return (
    <div className="side-comp">
      <div className="comp-btn">
        <img src={icon} alt="comp" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SideBarComp;
