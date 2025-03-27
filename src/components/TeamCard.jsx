import React, { useState } from "react";
import "../CSS/TeamCard.css";

const TeamCard = ({ props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className="profile-container"
      href={props.link}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="profile-frame">
        <div className="profile-box">
          <div className="emoji-wrapper"></div>
          <div className="info-container">
            <span className="profile-name">{props.name}</span>
            <span className="profile-status">Seeking for an opportunity</span>
          </div>
        </div>
        <img
          src={isHovered ? props.gif : "/teamcard-Bg.svg"}
          alt="card"
          className="profile-background"
          id="profileBg"
        />
        <img src={props.pic} alt={props.pic} className="profile-top" />
      </div>
      <div className="icon-wrapper">
        <div className="inner-icon">
          <div className="icon-set">
            <img src="/teamcard-star.svg" alt="star" className="icon-star" />
            <img
              src="/teamcard-blanckcircle.svg"
              alt="circle"
              className="icon-circle"
            />
            <img
              src="/teamcard-colorarrow.png"
              alt="arrow"
              className="icon-arrow"
            />
            <img
              src="/teamcard-colorcircle.svg"
              alt="colored-circle"
              className="icon-colored-circle"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default TeamCard;
