import React, { useState } from "react";
import "../CSS/TeamCard.css";
import { useStatus } from "./StatusProvider";

const TeamCard = ({ props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setStatus } = useStatus();

  return (
    <a
      className="profile-container"
      href={props.link}
      target="_blank"
      onMouseEnter={() => {
        setIsHovered(true);
        setStatus({ text: "Developer: ", subText: props.name });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setStatus({ text: "Welcome Home", subText: "" });
      }}
    >
      <div className="back-icon-wrapper"></div>
      <div className="profile-frame">
        <div className="profile-box">
          <div className="emoji-wrapper">
            <img
              src={
                !isHovered
                  ? "/teamcard-Memoji1.svg"
                  : "/teamcard-memojicircle.svg"
              }
              alt="emoji"
              className="profile-emoji"
            />
          </div>
          <div className="info-container">
            <span className="profile-name">{props.name}</span>
            <span className="profile-status">Seeking for an opportunity</span>
          </div>
        </div>
        <div className="profile-background">
          <img src="./teamcard-mask.svg" className="profile-mask"/>
          {isHovered ? (
            <img
              src={props.gif}
              alt="card"
              className="profile-gif"
              id="profileBg"
            />
          ) : (
            <img src="./teamcard-Bg.svg" className="profile-back-img" />
          )}
          <img src="" alt="" />
        </div>
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
