import React, { useState } from "react";
import "./SidebarCSS/sidebar.css";
import SideBarComp from "./SideBarComp";
import SideBarCompAlert from "./SideBarCompAlert";
import Chats from "./Chats";
import Starred from "./Starred";
import Archieve from "./Archieve";
import Alerts from "./Alerts";

const SideBar = () => {
  const [activeView, setActiveView] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case "chats":
        return <Chats icon="./sb-chats.svg" name="Chats" />;
      case "starred":
        return <Starred icon="./sb-starred-b.svg" name="Starred" />;
      case "archieve":
        return <Archieve icon="./sb-archieve.svg" name="Archieve" />;
      case "alerts":
        return <Alerts />;
      default:
        return null;
    }
  };

  return (
    <div
      className="sidebar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveView(null); // Reset icon on full mouse leave
      }}
    >
      <div className="side-bar-comp">
        <div className="comp-sec">
          <button onMouseEnter={() => setActiveView("chats")}>
            <SideBarComp
              icon={activeView === "chats" ? "./sb-chats-w-active.svg" : "./sb-chats-w.svg"}
              text="Chats"
            />
          </button>
          <div className="hor-line" />
          <button onMouseEnter={() => setActiveView("starred")}>
            <SideBarComp
              icon={activeView === "starred" ? "./sb-starred-active.svg" : "./sb-starred.svg"}
              text="Starred"
            />
          </button>
          <div className="hor-line" />
          <button onMouseEnter={() => setActiveView("alerts")}>
            <SideBarCompAlert />
          </button>
          <div className="hor-line" />
          <button onMouseEnter={() => setActiveView("archieve")}>
            <SideBarComp
              icon={activeView === "archieve" ? "./sb-archieve-active.svg" : "./sb-archieve.svg"}
              text="Archieve"
            />
          </button>
        </div>
      </div>

      {/* Render children only if hovered */}
      {isHovered && <div className="sidebar-content">{renderView()}</div>}
    </div>
  );
};

export default SideBar;
