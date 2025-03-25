import React, { useEffect, useRef } from "react";

const Footer = () => {
  // Refs for elements
  const vidRef = useRef(null);
  const machine1Ref = useRef(null);
  const machine2Ref = useRef(null);
  const machine3Ref = useRef(null);
  const machine4Ref = useRef(null);
  const eyesRef = useRef(null);
  const designRef = useRef(null);
  const crazyRef = useRef(null);
  const overlayBoxRef = useRef(null);

  useEffect(() => {
    const vid = vidRef.current;
    const machine1 = machine1Ref.current;
    const machine2 = machine2Ref.current;
    const machine3 = machine3Ref.current;
    const machine4 = machine4Ref.current;
    const eyes = eyesRef.current;
    const design = designRef.current;
    const crazy = crazyRef.current;
    const overlayBox = overlayBoxRef.current;

    // Initial state
    [machine1, machine2, machine3].forEach(m => m?.classList.add("visible"));
    machine4?.classList.add("fade-out");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / maxScroll) * 100;

      window.requestAnimationFrame(() => {
        if (scrollPercentage >= 80) {
          design?.classList.add("freeze");
          crazy?.classList.add("freeze");

          // Move and fade all machines together
          vid?.classList.add("visible");
          machine4?.classList.remove("fade-out");

          [machine1, machine2, machine3].forEach(m => m?.classList.remove("visible"));

          requestAnimationFrame(() => {
            machine4?.classList.add("fade-in");
            [machine1, machine2, machine3, machine4, eyes].forEach(m => {
              if (m) m.style.transform = "translate(-50%, -200px)";
            });
          });
        } else {
          design?.classList.remove("freeze");
          crazy?.classList.remove("freeze");

          requestAnimationFrame(() => {
            vid?.classList.remove("visible");
            machine4?.classList.remove("fade-in");
            machine4?.classList.add("fade-out");

            [machine1, machine2, machine3].forEach(m => m?.classList.add("visible"));
            [machine1, machine2, machine3, machine4, eyes].forEach(m => {
              if (m) m.style.transform = "translate(-50%, 0)";
            });
          });
        }
      });

      // Handle video visibility
      if (scrollPosition >= maxScroll - 100) {
        vid?.classList.add("visible");
        design?.classList.add("stick-to-screen");
        crazy?.classList.add("stick-to-screen");
        overlayBox?.classList.add("visible");
      } else {
        vid?.classList.remove("visible");
        design?.classList.remove("stick-to-screen");
        crazy?.classList.remove("stick-to-screen");
        overlayBox?.classList.remove("visible");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="content">
        <p>Scroll down...</p>
        <p style={{ height: "200vh" }}></p>
      </div>

      {/* Image Elements with Refs */}
      <img ref={designRef} src="/DESIGN.svg" alt="" className="design" />
      <img ref={crazyRef} src="/CRAZY.svg" alt="" className="crazy" />
      <img ref={vidRef} src="/Footer.gif" alt="" className="vid" />
      <img ref={machine1Ref} src="/MACHINE1.svg" alt="" className="machine" />
      <img ref={machine2Ref} src="/MACHINE2.svg" alt="" className="machine2" />
      <img ref={machine3Ref} src="/Machine3.svg" alt="" className="machine3" />
      <img ref={machine4Ref} src="/MACHINE4.svg" alt="" className="machine4" />
      <img ref={eyesRef} src="/Eyes.svg" alt="" className="eyes" />
      <div ref={overlayBoxRef} className="gif"></div>
    </div>
  );
};

export default Footer;
