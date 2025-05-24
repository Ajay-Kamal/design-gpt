import "../CSS/DesTeam.css";
import TeamCard from "./TeamCard";
import { useStatus } from "./StatusProvider";
import { useState } from "react";
import React from "react";

const DesignTeam = () => {
  const { setStatus } = useStatus();
  const [isHovered, setIsHovered] = useState(false);

  const desTeam = [
    {
      id: 1,
      name: "Rashika1",
      pic: "/teamcard-NUPUR.png",
      link: "https://www.linkedin.com/in/praharsha-nelaturi/",
      gif: "/teamcard-PRAHARSHA.gif",
    },
    {
      id: 2,
      name: "Rashika2",
      pic: "/teamcard-RASHIKA.png",
      link: "https://www.linkedin.com/in/ajay-kamal-tavitiki-5933632a7/",
      gif: "/teamcard-AJAY.gif",
    },
    {
      id: 3,
      name: "Rashika3",
      pic: "/teamcard-Preetham.svg",
      link: "https://www.linkedin.com/in/preetham-nelaturi-6a6696290/",
      gif: "/teamcard-PREETHAM.gif",
    },
    {
      id: 4,
      name: "Rashika4",
      pic: "/teamcard-Nancy.svg",
      link: "https://www.linkedin.com/in/nancy-dhakate-615316282/",
      gif: "/teamcard-NANCY.gif",
    },
    {
      id: 5,
      name: "Rashika5",
      pic: "/teamcard-Praharsha.svg",
      link: "https://www.linkedin.com/in/praharsha-nelaturi/",
      gif: "/teamcard-PRAHARSHA.gif",
    },
    {
      id: 6,
      name: "Rashika6",
      pic: "/teamcard-Ajay.png",
      link: "https://www.linkedin.com/in/ajay-kamal-tavitiki-5933632a7/",
      gif: "/teamcard-AJAY.gif",
    },
  ];

  return (
    <div className="des-team">
      <img className="des-bg-grid" src="./des-team-grid.svg"></img>
      <div className="des-bg-grad"></div>
      <div className="des-team-head">
        <div className="overtime-artists">
          <img src="/left-curve-tc.svg" alt="" className="left-w" />
          <p>Overtime Artists</p>
          <img src="/right-curve-tc.svg" alt="" className="right-w" />
        </div>
        <p className="ds-content">
          Running on 4 hours of sleep and 100% determination to ship{" "}
          <span>'Perfection'</span>
        </p>
      </div>
      <div className="des-team-members">
        <div className="des-is-art">
          <p>Design is Art!</p>
          <img src="./des-team-pointer.svg" alt="->" className="des-pntr1" />
        </div>
        <div className="des-left-sec">
          <a
            className="p1-profile-container"
            href="{props.link}"
            target="_blank"
            onMouseEnter={() => {
              setIsHovered(true);
              setStatus({ text: "Developer: ", subText: "props.name" });
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setStatus({ text: "Welcome Home", subText: "" });
            }}
          >
            <div className="p1-profile-frame">
              <div className="p1-profile-box">
                <div className="p1-emoji-wrapper">
                  <img
                    src={
                      !isHovered
                        ? "/teamcard-Memoji1.svg"
                        : "/teamcard-memojicircle.svg"
                    }
                    alt="emoji"
                    className="p1-profile-emoji"
                  />
                </div>
                <div className="p1-info-container">
                  <span className="p1-profile-name">""</span>
                  <span className="p1-profile-status">
                    Seeking for an opportunity
                  </span>
                </div>
              </div>
              <img
                src={isHovered ? "" : "/teamcard-Bg.svg"}
                alt="card"
                className="p1-profile-background"
                id="p1-profileBg"
              />
              <img src="" alt="" className="p1-profile-top" />
            </div>
            <div className="p1-icon-wrapper">
              <div className="p1-inner-icon">
                <div className="p1-icon-set">
                  <img
                    src="/teamcard-star.svg"
                    alt="star"
                    className="p1-icon-star"
                  />
                  <img
                    src="/teamcard-blanckcircle.svg"
                    alt="circle"
                    className="p1-icon-circle"
                  />
                  <img
                    src="/teamcard-colorarrow.png"
                    alt="arrow"
                    className="p1-icon-arrow"
                  />
                  <img
                    src="/teamcard-colorcircle.svg"
                    alt="colored-circle"
                    className="p1-icon-colored-circle"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="des-mid-sec">
          <div>
            <a
              className="p2-profile-container"
              href="{props.link}"
              target="_blank"
              onMouseEnter={() => {
                setIsHovered(true);
                setStatus({ text: "Developer: ", subText: "props.name" });
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setStatus({ text: "Welcome Home", subText: "" });
              }}
            >
              <div className="p2-profile-frame">
                <div className="p2-profile-box">
                  <div className="p2-emoji-wrapper">
                    <img
                      src={
                        !isHovered
                          ? "/teamcard-Memoji1.svg"
                          : "/teamcard-memojicircle.svg"
                      }
                      alt="emoji"
                      className="p2-profile-emoji"
                    />
                  </div>
                  <div className="p2-info-container">
                    <span className="p2-profile-name">""</span>
                    <span className="p2-profile-status">
                      Seeking for an opportunity
                    </span>
                  </div>
                </div>
                <img
                  src={isHovered ? "" : "/teamcard-Bg.svg"}
                  alt="card"
                  className="p2-profile-background"
                  id="p2-profileBg"
                />
                <img src="" alt="" className="p2-profile-top" />
              </div>
              <div className="p2-icon-wrapper">
                <div className="p2-inner-icon">
                  <div className="p2-icon-set">
                    <img
                      src="/teamcard-star.svg"
                      alt="star"
                      className="p2-icon-star"
                    />
                    <img
                      src="/teamcard-blanckcircle.svg"
                      alt="circle"
                      className="p2-icon-circle"
                    />
                    <img
                      src="/teamcard-colorarrow.png"
                      alt="arrow"
                      className="p2-icon-arrow"
                    />
                    <img
                      src="/teamcard-colorcircle.svg"
                      alt="colored-circle"
                      className="p2-icon-colored-circle"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              className="p3-profile-container"
              href="{props.link}"
              target="_blank"
              onMouseEnter={() => {
                setIsHovered(true);
                setStatus({ text: "Developer: ", subText: "props.name" });
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setStatus({ text: "Welcome Home", subText: "" });
              }}
            >
              <div className="p3-profile-frame">
                <div className="p3-profile-box">
                  <div className="p3-emoji-wrapper">
                    <img
                      src={
                        !isHovered
                          ? "/teamcard-Memoji1.svg"
                          : "/teamcard-memojicircle.svg"
                      }
                      alt="emoji"
                      className="p3-profile-emoji"
                    />
                  </div>
                  <div className="p3-info-container">
                    <span className="p3-profile-name">""</span>
                    <span className="p3-profile-status">
                      Seeking for an opportunity
                    </span>
                  </div>
                </div>
                <img
                  src={isHovered ? "" : "/teamcard-Bg.svg"}
                  alt="card"
                  className="p3-profile-background"
                  id="p3-profileBg"
                />
                <img src="" alt="" className="p3-profile-top" />
              </div>
              <div className="p3-icon-wrapper">
                <div className="p3-inner-icon">
                  <div className="p3-icon-set">
                    <img
                      src="/teamcard-star.svg"
                      alt="star"
                      className="p3-icon-star"
                    />
                    <img
                      src="/teamcard-blanckcircle.svg"
                      alt="circle"
                      className="p3-icon-circle"
                    />
                    <img
                      src="/teamcard-colorarrow.png"
                      alt="arrow"
                      className="p3-icon-arrow"
                    />
                    <img
                      src="/teamcard-colorcircle.svg"
                      alt="colored-circle"
                      className="p3-icon-colored-circle"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              className="p4-profile-container"
              href="{props.link}"
              target="_blank"
              onMouseEnter={() => {
                setIsHovered(true);
                setStatus({ text: "Developer: ", subText: "props.name" });
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setStatus({ text: "Welcome Home", subText: "" });
              }}
            >
              <div className="p4-profile-frame">
                <div className="p4-profile-box">
                  <div className="p4-emoji-wrapper">
                    <img
                      src={
                        !isHovered
                          ? "/teamcard-Memoji1.svg"
                          : "/teamcard-memojicircle.svg"
                      }
                      alt="emoji"
                      className="p4-profile-emoji"
                    />
                  </div>
                  <div className="p4-info-container">
                    <span className="p4-profile-name">""</span>
                    <span className="p4-profile-status">
                      Seeking for an opportunity
                    </span>
                  </div>
                </div>
                <img
                  src={isHovered ? "" : "/teamcard-Bg.svg"}
                  alt="card"
                  className="p4-profile-background"
                  id="p4-profileBg"
                />
                <img src="" alt="" className="p4-profile-top" />
              </div>
              <div className="p4-icon-wrapper">
                <div className="p4-inner-icon">
                  <div className="p4-icon-set">
                    <img
                      src="/teamcard-star.svg"
                      alt="star"
                      className="p4-icon-star"
                    />
                    <img
                      src="/teamcard-blanckcircle.svg"
                      alt="circle"
                      className="p4-icon-circle"
                    />
                    <img
                      src="/teamcard-colorarrow.png"
                      alt="arrow"
                      className="p4-icon-arrow"
                    />
                    <img
                      src="/teamcard-colorcircle.svg"
                      alt="colored-circle"
                      className="p4-icon-colored-circle"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              className="p5-profile-container"
              href="{props.link}"
              target="_blank"
              onMouseEnter={() => {
                setIsHovered(true);
                setStatus({ text: "Developer: ", subText: "props.name" });
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setStatus({ text: "Welcome Home", subText: "" });
              }}
            >
              <div className="p5-profile-frame">
                <div className="p5-profile-box">
                  <div className="p5-emoji-wrapper">
                    <img
                      src={
                        !isHovered
                          ? "/teamcard-Memoji1.svg"
                          : "/teamcard-memojicircle.svg"
                      }
                      alt="emoji"
                      className="p5-profile-emoji"
                    />
                  </div>
                  <div className="p5-info-container">
                    <span className="p5-profile-name">""</span>
                    <span className="p5-profile-status">
                      Seeking for an opportunity
                    </span>
                  </div>
                </div>
                <img
                  src={isHovered ? "" : "/teamcard-Bg.svg"}
                  alt="card"
                  className="p5-profile-background"
                  id="p5-profileBg"
                />
                <img src="" alt="" className="p5-profile-top" />
              </div>
              <div className="p5-icon-wrapper">
                <div className="p5-inner-icon">
                  <div className="p5-icon-set">
                    <img
                      src="/teamcard-star.svg"
                      alt="star"
                      className="p5-icon-star"
                    />
                    <img
                      src="/teamcard-blanckcircle.svg"
                      alt="circle"
                      className="p5-icon-circle"
                    />
                    <img
                      src="/teamcard-colorarrow.png"
                      alt="arrow"
                      className="p5-icon-arrow"
                    />
                    <img
                      src="/teamcard-colorcircle.svg"
                      alt="colored-circle"
                      className="p5-icon-colored-circle"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="des-right-sec">
          <a
            className="p6-profile-container"
            href="{props.link}"
            target="_blank"
            onMouseEnter={() => {
              setIsHovered(true);
              setStatus({ text: "Developer: ", subText: "props.name" });
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setStatus({ text: "Welcome Home", subText: "" });
            }}
          >
            <div className="p6-profile-frame">
              <div className="p6-profile-box">
                <div className="p6-emoji-wrapper">
                  <img
                    src={
                      !isHovered
                        ? "/teamcard-Memoji1.svg"
                        : "/teamcard-memojicircle.svg"
                    }
                    alt="emoji"
                    className="p6-profile-emoji"
                  />
                </div>
                <div className="p6-info-container">
                  <span className="p6-profile-name">""</span>
                  <span className="p6-profile-status">
                    Seeking for an opportunity
                  </span>
                </div>
              </div>
              <img
                src={isHovered ? "" : "/teamcard-Bg.svg"}
                alt="card"
                className="p6-profile-background"
                id="p6-profileBg"
              />
              <img src="" alt="" className="p6-profile-top" />
            </div>
            <div className="p6-icon-wrapper">
              <div className="p6-inner-icon">
                <div className="p6-icon-set">
                  <img
                    src="/teamcard-star.svg"
                    alt="star"
                    className="p6-icon-star"
                  />
                  <img
                    src="/teamcard-blanckcircle.svg"
                    alt="circle"
                    className="p6-icon-circle"
                  />
                  <img
                    src="/teamcard-colorarrow.png"
                    alt="arrow"
                    className="p6-icon-arrow"
                  />
                  <img
                    src="/teamcard-colorcircle.svg"
                    alt="colored-circle"
                    className="p6-icon-colored-circle"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="des-is-czy">
          <p>Crazzyyy!</p>
          <img src="./des-team-pointer.svg" alt="->" className="des-pntr2" />
        </div>
      </div>
    </div>
  );
};

export default DesignTeam;
