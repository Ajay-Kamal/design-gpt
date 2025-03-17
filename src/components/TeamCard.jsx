import React from "react";
import "../CSS/TeamCard.css";

const TeamCard = ({ props }) => {  
  return (
    <div className="profile-container">
      <div className="profile-frame">
        <div className="profile-box">
          <div className="emoji-wrapper"></div>
          <div className="info-container">
            <span className="profile-name">Naam</span>
            <span className="profile-status">Seeking for an opportunity</span>
          </div>
        </div>
        <img src="/teamcard-Bg.svg" alt="card" className="profile-background" id="profileBg" />
        <img src="/teamcard-Na ncy.svg" alt="profile top" className="profile-top" />
      </div>
      <div className="icon-wrapper">
        <div className="inner-icon">
          <div className="icon-set">
            <img src="/teamcard-star.svg" alt="star" className="icon-star" />
            <img src="/teamcard-blanckcircle.svg" alt="circle" className="icon-circle" />
            <img src="/teamcard-colorarrow.png" alt="arrow" className="icon-arrow" />
            <img src="/teamcard-colorcircle.svg" alt="colored-circle" className="icon-colored-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
