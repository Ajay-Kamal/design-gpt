import React, { useState, useEffect, useRef } from "react";
import "./RegCSS/Avatar.css";
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";

const maleAvatars = [
  "./m1.svg",
  "./m2.svg",
  "./m3.svg",
  "./m4.svg",
  "./m5.svg",
  "./m6.svg",
  "./m7.svg",
  "./m8.svg",
  "./m9.svg",
  "./m10.svg",
];
const extraMaleAvatars = [
  "./m11.svg",
  "./m12.svg",
  "./m13.svg",
  "./m14.svg",
  "./m15.svg",
  "./m16.svg",
  "./m17.svg",
  "./m18.svg",
  "./m19.svg",
  "./m20.svg",
];
const femaleAvatars = [
  "./f1.svg",
  "./f2.svg",
  "./f3.svg",
  "./f4.svg",
  "./f5.svg",
  "./f6.svg",
  "./f7.svg",
  "./f8.svg",
  "./f9.svg",
  "./f10.svg",
];
const extraFemaleAvatars = [
  "./f11.svg",
  "./f12.svg",
  "./f13.svg",
  "./f14.svg",
  "./f15.svg",
  "./f16.svg",
  "./f17.svg",
  "./f18.svg",
  "./f19.svg",
  "./f20.svg",
];

const AvatarSelection = () => {
  const [gender, setGender] = useState("male");
  const [mainAvatar, setMainAvatar] = useState(maleAvatars[0]);
  const [selectedAvatar, setSelectedAvatar] = useState({ grid: 0, index: 0 });
  const [dots1, setDots1] = useState(0);
  const [dots2, setDots2] = useState(0);
  const avatarGridRef = useRef(null);
  const extraAvatarGridRef = useRef(null);

  useEffect(() => {
    const handleScroll = (ref, setDots) => {
      if (!ref.current) return;
      const scrollLeft = ref.current.scrollLeft;
      const scrollWidth = ref.current.scrollWidth;
      const viewWidth = ref.current.offsetWidth;
      const midpoint = (scrollWidth - viewWidth) / 2;
      setDots(scrollLeft < midpoint ? 0 : 1);
    };
    const avatarGrid = avatarGridRef.current;
    const extraAvatarGrid = extraAvatarGridRef.current;
    if (avatarGrid) {
      const onScroll = () => handleScroll(avatarGridRef, setDots1);
      avatarGrid.addEventListener("scroll", onScroll);
      return () => avatarGrid.removeEventListener("scroll", onScroll);
    }
    if (extraAvatarGrid) {
      const onScroll = () => handleScroll(extraAvatarGridRef, setDots2);
      extraAvatarGrid.addEventListener("scroll", onScroll);
      return () => extraAvatarGrid.removeEventListener("scroll", onScroll);
    }
  }, [gender]);

  // Update main avatar when gender changes
  useEffect(() => {
    if (gender === "male") {
      setMainAvatar(maleAvatars[0]);
      setSelectedAvatar({ grid: 0, index: 0 });
    } else {
      setMainAvatar(femaleAvatars[0]);
      setSelectedAvatar({ grid: 0, index: 0 });
    }
  }, [gender]);

  const getAvatars = () => (gender === "male" ? maleAvatars : femaleAvatars);
  const getExtraAvatars = () =>
    gender === "male" ? extraMaleAvatars : extraFemaleAvatars;

  const handleAvatarClick = (src, grid, index) => {
    setMainAvatar(src);
    setSelectedAvatar({ grid, index });
  };

  return (
    <div className="avatar">
      <NavBar />
      <SideBar />
      <div className="avatar-section">
        <div className="avatar-container-border">
          <div className="avatar-container">
            <img
              src="./blue-grid.svg"
              alt="Avatar Vector"
              className="avatar-bgrid"
              style={{ display: gender === "male" ? "block" : "none" }}
            />
            <img
              src="./pink-grid.svg"
              alt="Avatar Vector Pink"
              className="avatar-bgrid"
              style={{ display: gender === "female" ? "block" : "none" }}
            />

            <h2 className="avatar-h2">Set your style!</h2>
            <p className="avatar-subtitle">
              Pick an avatar that represents you and get ready to dive in!
            </p>
            <div className="avatar-main">
              <img
                src={mainAvatar}
                alt="Main Avatar"
                className="avatar-main-avatar"
                id="mainAvatar"
              />
              <button className="avatar-profile-edit">
                <img
                  src="./Camera-icon.svg"
                  alt="Edit"
                  className="avatar-profile-edit-icon"
                />
              </button>
            </div>

            <div className="avatar-tabs">
              <div
                className={`avatar-tab${gender === "male" ? " active" : ""}`}
                onClick={() => setGender("male")}
              >
                MALE
              </div>
              <div
                className={`avatar-tab${gender === "female" ? " active" : ""}`}
                onClick={() => setGender("female")}
              >
                FEMALE
              </div>
            </div>

            <div className="avatar-scroll-container">
              <div className="avatars" ref={avatarGridRef}>
                {getAvatars().map((src, idx) => (
                  <div
                    key={src}
                    className={`avatar-wrapper${
                      selectedAvatar.grid === 0 && selectedAvatar.index === idx
                        ? " selected"
                        : ""
                    }`}
                    onClick={() => handleAvatarClick(src, 0, idx)}
                  >
                    <img src={src} alt={`avatar-${idx}`} className="avatar-img" />
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-dots">
              <span className={`dot${dots1 === 0 ? " active" : ""}`}></span>
              <span className={`dot${dots1 === 1 ? " active" : ""}`}></span>
            </div>

            <div className="avatar-vibe-title">
              <img
                src="./left-shift.svg"
                alt="left icon"
                className="avatar-left-shift"
              />
              <span>Vibe Shift</span>
              <img
                src="./right-shift.svg"
                alt="right icon"
                className="avatar-right-shift"
              />
            </div>

            <div className="avatar-scroll-container">
              <div className="avatars" ref={extraAvatarGridRef}>
                {getExtraAvatars().map((src, idx) => (
                  <div
                    key={src}
                    className={`avatar-wrapper${
                      selectedAvatar.grid === 1 && selectedAvatar.index === idx
                        ? " selected"
                        : ""
                    }`}
                    onClick={() => handleAvatarClick(src, 1, idx)}
                  >
                    <img
                      src={src}
                      alt={`extra-avatar-${idx}`}
                      className="avatar-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-dots">
              <span className={`dot${dots2 === 0 ? " active" : ""}`}></span>
              <span className={`dot${dots2 === 1 ? " active" : ""}`}></span>
            </div>

            <div className="avatar-buttons">
              <button className="avatar-set">All set!</button>
              <button className="avatar-skip">Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;
