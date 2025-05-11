import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      setGifKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <div
      className="footer-container"
      ref={footerRef}
    >
      <div
        className={`footer ${isInView ? "footer-in-view" : ""}`}
        ref={footerRef}
      >
        <div className="footer-mach">
          <div className="footer-mcn-fnl">
            <img
              src="./footer-mach-final.svg"
              alt="Footer-Final"
              className="mach-final-base"
            />
            {isInView && (
              <>
                <img
                  src="./footer-Footer.gif"
                  className="footer-gif"
                  key={gifKey}
                />
                <img src="./footer-mach-top.svg" className="footer-mach-top" />
              </>
            )}
          </div>
          <div className={`footer-mcn-init${
              isInView ? " footer-comp-anim-out" : ""
            }`}
          >
            <img
              src="./footer-mach-init.svg"
              alt="Footer-Init"
              className="mach-init-base"
            />
            <img src="./footer-Eyes.svg" alt="O  O" className="footer-eyes" />
          </div>
        </div>
        <div className="footer-text">
          <img src="./footer-txt-left.svg" alt="----->" />
          <p>
            Crafted with <span className="footer-dil">❤️</span> Design Duh!
          </p>
          <img src="./footer-txt-right.svg" alt="<-----" />
        </div>
        <img src="./footer-bg-grid.svg" className="footer-grid" />
        <img src="./footer-bg.svg" className="footer-bg" />
        <div className="footer-left-panel">
          <img
            src="./footer-left-fnl.svg"
            className="footer-right-fnl"
            alt="||||"
          />
          <img
            src="./footer-left-init.svg"
            className={`footer-left-init${
              isInView ? " footer-comp-anim-out" : ""
            }`}
            alt="||||"
          />
        </div>
        <div className="footer-right-panel">
          <img
            src="./footer-right-fnl.svg"
            className="footer-right-fnl"
            alt="||||"
          />
          <img
            src="./footer-right-init.svg"
            className={`footer-right-init${
              isInView ? " footer-comp-anim-out" : ""
            }`}
            alt="||||"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
