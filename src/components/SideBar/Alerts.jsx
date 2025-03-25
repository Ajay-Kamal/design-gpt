import React from "react";
import { useState } from "react";
import "./SidebarCSS/Alert.css";
import { useStatus } from "../StatusProvider";

const Alerts = () => {
  const { mesgCnt, setMesgCnt } = useStatus(); // 🔹 Get shared state

  return (
    <div className="sb-alerts">
      <div className="sb-name">
        <p className="name">Alerts ({mesgCnt})</p>
        <button
          onClick={() => {
            setMesgCnt(mesgCnt + 1);
          }}
        >
          Click Me
        </button>
      </div>
      <div className="state-sec">
        <img src="./no-alerts.svg" alt="no-alerts" className="no-allerts" />
        <div className="state-sec-txt">
          <p className="p1">Wow! A clean slate</p>
          <p className="p2">You have no new alerts</p>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
