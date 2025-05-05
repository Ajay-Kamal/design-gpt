import React, { useState, useRef } from "react";
import "./Disland.css";

const Disland = () => {
  const [isAtUnionCenter, setIsAtUnionCenter] = useState(false);
  const [isAtRectangleCenter, setIsAtRectangleCenter] = useState(false);
  const timeoutRef = useRef();
  

  const handleMouseEnter = () => {
    setIsAtUnionCenter(true);
    setIsAtRectangleCenter(false);
    // Wait for the union center transition (0.55s) + pause (0.5s)
    timeoutRef.current = setTimeout(() => {
      setIsAtRectangleCenter(true);
    }, 1050);
  };

  const handleMouseLeave = () => {
    setIsAtUnionCenter(false);
    setIsAtRectangleCenter(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <div
      className="dynamic-island"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src="./navbar-union.svg" alt="" className="di-union" />
      <div className="di-hover-rectangle">
        <img src="./navbar-scale.svg" alt="||||" className="di-scale" />
      </div>
      <div
        className={
          "di-movable-sec" +
          (isAtRectangleCenter
            ? " at-rectangle-center"
            : isAtUnionCenter
            ? " at-union-center"
            : "")
        }
      >
        <div className={"di-hover-circle"+(isAtRectangleCenter ? "at-union-center" : "")}></div>
        <div className="di-mov-btn-cnt">
          <button className="di-movable-button">img</button>
        </div>
      </div>
    </div>
  );
};

export default Disland;