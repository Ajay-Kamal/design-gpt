import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const [showEyes, setShowEyes] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [hideInit, setHideInit] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the sequence
          setIsInView(true);

          // Start fading out init image as component moves up
          setTimeout(() => {
            setHideInit(true);
          }, 500); // Start fading out halfway through the move-up animation

          // Wait for component to settle then show eyes
          setTimeout(() => {
            setShowEyes(true);

            // Wait then show gif
            setTimeout(() => {
              setShowGif(true);
            }, 2000);
          }, 1000);
        } else {
          // Reset all states when out of view
          setIsInView(false);
          setShowEyes(false);
          setShowGif(false);
          setHideInit(false);
        }
      },
      { threshold: 0.9 }
    );

    const footerElement = document.querySelector(".footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div className="footer">
      <img src="./footer-DESIGN.svg" alt="footer-crazy" className="crazy" />
      <img src="./footer-CRAZY.svg" alt="footer-design" className="design" />
      <div className={`machine-container ${isInView ? "animate-in" : ""}`}>
        <img
          src="./footer-mach-final.svg"
          alt="footer-final"
          className="machine-final"
        />
        <img
          src="./footer-mach-init.svg"
          alt="footer-init"
          className={`machine-init ${hideInit ? "fade-out" : ""}`}
        />
        <div className="eyes">
          <img
            src="./footer-Eyes.svg"
            alt="eyes-closed"
            className={`eyes-closed ${showEyes ? "hide" : ""}`}
          />
          <img
            src="./footer-Eyes-open.svg"
            alt="eyes-open"
            className={`eyes-open ${showEyes ? "show" : ""}`}
          />
        </div>
        {showGif && (
          <img
            src="./footer-Footer.gif"
            alt="footer-gif"
            className="gif"
            key={Date.now()}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
