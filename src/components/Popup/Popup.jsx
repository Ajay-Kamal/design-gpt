import React from "react";
import "./Popup.css";

const Popup = () => {
  return (
    <div className="popup">

      
      
      <div className="popup-chatbox">
        <div className="popup-chat-box1">
          <img
            src="./popup-chat-box-icon.svg"
            alt=""
            className="chat-box-icon"
          />
          <textarea
            className="popup-chat-input"
            placeholder="Enter your prompt here"
          />
        </div>
        <div className="popup-chat-box2">
          <button className="popup-attachment">
            <img
              src="./popup-paperclip-vertical.svg"
              alt="Default Icon"
              className="popup-default-img"
            />
            <img
              src="./popup-paperclip-color.svg"
              alt="Hover Icon"
              className="popup-hover-img"
            />
            <span>Attachment</span>
            <img
              src="./popup-uploadimage.svg"
              alt="uploadimage"
              className="popup-uploadimage"
            />
          </button>
          <div className="popup-attachment-line"></div>
          <button className="popup-send-btn">
            <img
              className="popup-sendicon"
              src="./popup-sendicon.svg"
              alt="Send"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
