import React from "react";
import "../CSS/Card.css";

const Card = ({ props }) => {
  return (
    <div className="wrapper">
      <div className="main-frame">
        <div className="main-background">
          <img src="./ai-stars.svg" alt="" id="star1" className="star" />
          <img src="./ai-stars.svg" alt="" id="star2" className="star" />
          <img src="group.svg" alt="" id="group" />
          <img src="Ellipse-ring-2.svg" alt="" id="Ellipse-ring-2" />
          <img src="Ellipse-ring.svg" alt="" id="Ellipse-ring" />
          <img src={props.image} id="logo1" />
          <img src="Group-2.svg" alt="" id="group-2" />
          <img src="logo-ring-1.svg" alt="" id="logo-ring-1" />
          <img src="logo-ring-2.svg" alt="" id="logo-ring-2" />
        </div>
      </div>
      <div className="text-wrapper">
        <div className="main-heading"><p>{props.head}</p></div>
        <div className="paragraph-text"><p>{props.para}</p></div>
        <img src="Arrow-final.svg" alt="" className="arrow" />
      </div>
    </div>
  );
};

export default Card;
