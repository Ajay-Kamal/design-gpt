import React from "react";
import "../CSS/DevTeam.css";
import TeamCard from "./TeamCard";


const DevTeam = () => {
  return (
    <div className="dev-team">
      <div className="dev-team-head">
        <div className="code-wizards">
          <img src="/left-curve-tc.svg" alt="" className="left-w"/>
          <p>Code Wizards</p>
          <img src="/right-curve-tc.svg" alt="" className="right-w"/>
        </div>
        <p className="dt-content">
          Stacking <span>'Solutions'</span>, snacking on problems, and keeping
          our bugs low-carbs
        </p>
      </div>
      <TeamCard/> 
    </div>
  );
};

export default DevTeam;
