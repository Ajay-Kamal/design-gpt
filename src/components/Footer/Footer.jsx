import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setVisible(scrollPercentage >= 80);
  }, [scrollPercentage]);

  return (
    <div className="content">
      <p>Scroll down...</p>
      <div >
        <img
          src="./footer-DESIGN.svg"
          alt=""
          className={`design ${visible ? "freeze" : ""}`}
        />
        <img
          src="./footer-CRAZY.svg"
          alt=""
          className={`crazy ${visible ? "freeze" : ""}`}
        />
        <div className="machine-part">
          <img
            src="./footer-Footer.gif"
            alt=""
            className={`vid ${visible ? "visible" : ""}`}
          />{" "}
          <img
            src="./footer-MACHINE1.svg"
            alt=""
            className={`machine ${visible ? "freeze" : "visible"}`}
          />
          <img
            src="./footer-MACHINE2.svg"
            alt=""
            className={`machine2 ${visible ? "freeze" : "visible"}`}
          />
          <img
            src="./footer-Machine3.svg"
            alt=""
            className={`machine3 ${visible ? "freeze" : "visible"}`}
          />
          <img
            src="./footer-MACHINE4.svg"
            alt=""
            className={`machine4 ${visible ? "fade-in" : "fade-out"}`}
          />
          <img src="./footer-Eyes.svg" alt="" className="eyes" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
