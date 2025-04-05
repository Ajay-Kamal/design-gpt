import React from "react";
import "./NavBar.css";
import RegisterBtn from "../RegisterBtn";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="act-nav">
        <Link to="/">
          <div className="nav__logo-container" style={{ cursor: "pointer" }}>
            <img
              src="./navbar-dd-logo.svg"
              alt="dd-logo"
              className="nav__logo"
            />
            <div className="nav__vertical-line"></div>
            <span className="nav__name">Loco-ai</span>
          </div>
        </Link>
        <div className="nav__dynamic-island">
          <img
            src="./navbar-union.svg"
            alt="navbarUnion"
            className="nav__union"
          />

          <div className="nav__center-rectangle"></div>
          <div className="nav__center-circle"></div>

          <div className="nav__center-text" id="nav-text">
            Competitive Analysis
          </div>

          <div className="nav__dropsheet">
            <div className="nav__scale-container">
              <img
                src="./navbar-scale.svg"
                alt="scale"
                className="nav__scale"
              />
            </div>
            <img
              src="./navbar-pointer.svg"
              alt="pointer"
              className="nav__pointer"
            />

            <div className="nav__scroll-container">
              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <button className="nav__button">
                    <img
                      src="./navbar-comingsoon.svg"
                      alt="icon1"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Coming Soon</span>
                </div>
              </div>
              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <button className="nav__button">
                    <img
                      src="whiteboardinglogo.svg"
                      alt="icon2"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Whiteboarding</span>
                </div>
              </div>
              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <button className="nav__button">
                    <img
                      src="interviewlogo.svg"
                      alt="icon3"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Interview</span>
                </div>
              </div>

              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <div className="nav__button-bg-active"></div>
                  <button className="nav__button nav__button--active">
                    <img
                      src="CompetativeAnalysis-icon.svg"
                      alt="ca-logo"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Competitive Analysis</span>
                </div>
              </div>

              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <button className="nav__button">
                    <img
                      src="researchlogo.svg"
                      alt="icon4"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Research</span>
                </div>
              </div>
              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <button className="nav__button">
                    <img
                      src="uploadreview-logo.svg"
                      alt="icon5"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Upload & Review</span>
                </div>
              </div>
              <div className="nav__button-bg">
                <div className="nav__button-container">
                  <button className="nav__button">
                    <img
                      src="DataInsight-logo.svg"
                      alt="icon6"
                      className="nav__button-icon"
                    />
                  </button>
                  <span className="nav__button-name">Data Insight</span>
                </div>
              </div>
            </div>
          </div>

          <div className="nav__home-button-bg">
            <button className="nav__home-button">
              <img
                src="star1-icon.svg"
                alt="star1-icon"
                className="nav__star-icon"
              />
              <img
                src="star2-icon.svg"
                alt="star2-icon"
                className="nav__star-icon"
              />
              <img
                src="star3-icon.svg"
                alt="star3-icon"
                className="nav__star-icon"
              />
              <img
                src="star2-icon.svg"
                alt="star2-icon"
                className="nav__star-icon"
              />
            </button>
          </div>
        </div>

        <RegisterBtn />
      </div>
    </nav>
  );
};

export default NavBar;
