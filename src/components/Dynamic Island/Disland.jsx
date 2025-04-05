import React from "react";
import "./Disland.css";

const Disland = () => {
  return (
    <div className="dynamic-island">
      <img src="./navbar-union.svg" alt="" className="di-union" />
      <div className="di-hover-rectangle"></div>
      <div className="di-movable-sec">
        <div className="di-hover-circle"></div>
        <div className="di-mov-btn-cnt">
          <button className="di-movable-button">img</button>
        </div>
      </div>
    </div>
  );
};

export default Disland;
