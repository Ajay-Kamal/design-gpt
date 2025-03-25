import React from 'react';
import { useState } from 'react';
import "./SidebarCSS/sidebaralert.css";
import { useStatus } from "../StatusProvider"; // 🔹 Import the existing context

const SideBarCompAlert = () => {
  const { mesgCnt } = useStatus(); // 🔹 Get the shared message count

  return (
    <div className="side-comp">
      <div className="comp-btn">
        <img src="./sb-alerts.svg" alt="comp" />
      </div>
      <p>Alerts</p>
      <div className="mesg-cnt">{mesgCnt}</div>  
    </div>
  );
};

export default SideBarCompAlert;