import React, { useState } from "react";
import "./Profile.css";
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";
import profileImage from "/teamcard-PREETHAM.gif";

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const charLimit = 150;

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="profile-page">
      <NavBar />
      <SideBar />

      <div className="ps-content-area">
        <div className="ps-bg-grid">
          <button className="ps-ch-cover">Change cover</button>
          <img src="/ps-bg-grid.svg" alt="" />
        </div>
        <div className="ps-profile-content">
          <div className="ps-profile-info">
            <div className="ps-profile-pic">
              <img
                src={profileImage}
                alt="profile"
                className="ps-profile-img"
              />
              <button className="ps-prf-edit">
                <img src="/ps-pencil.svg" alt="" />
              </button>
            </div>
            <div className="ps-profile-name">
              <h1>Chaitanya Sai</h1>
              <p>@chaitanya_sai</p>
            </div>
          </div>
          <div className="ps-section">
            <div className="ps-section-title">
              <div className="ps-hor-line"></div>
              <div className="ps-sec-mid">
                <img src="/ps-usersquare.svg" alt="" />
                Profile Information
              </div>

              <div className="ps-hor-line"></div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field">
                <label>
                  First Name <span className="ps-required">*</span>
                </label>
                <input type="text" defaultValue="Chaitanya" />
              </div>
              <div className="ps-form-field">
                <label>
                  Last Name <span className="ps-required">*</span>
                </label>
                <input type="text" defaultValue="Sai" />
                <div className="ps-edit-button"></div>
                <div className="ps-edit-line"></div>
              </div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field">
                <label>
                  Username <span className="ps-required">*</span>
                </label>
                <div className="ps-username-field">
                  <div className="ps-at-symbol">
                    <img src="/ps-atr.svg" alt="" />
                  </div>
                  <input type="text" defaultValue="chaitanya_sai9" />
                </div>
              </div>
              <div className="ps-form-field">
                <label>Pronouns</label>
                <input type="text" defaultValue="He/him" />
              </div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field" style={{ flex: "100%" }}>
                <label
                  style={{
                    WebkitTextFillColor:
                      bio.length > charLimit ? "red" : "black",
                  }}
                >
                  Short Bio
                </label>
                <textarea
                  placeholder="Here's where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more."
                  value={bio}
                  onChange={handleBioChange}
                ></textarea>
                <div
                  className="ps-character-count"
                  style={{
                    color: bio.length > charLimit ? "red" : "black",
                  }}
                >
                  <div
                    className="ps-err-msg"
                    style={{
                      opacity: bio.length > charLimit ? 1 : 0,
                    }}
                  >
                    <img src="/ps-warn.svg" alt="!" />
                    <p>Bio may only contain a maximum of 150 characters</p>
                  </div>
                  {bio.length}/{charLimit}
                </div>
              </div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field" style={{ flex: "100%" }}>
                <label>LinkedIn Profile</label>
                <div className="ps-form-field ps-with-icon">
                  <div className="ps-icon">
                    <img src="/ps-link.svg" alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Share your LinkedIn URL here"
                  />
                </div>
              </div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field" style={{ flex: "100%" }}>
                <label>Portfolio</label>
                <div className="ps-form-field ps-with-icon">
                  <div className="ps-icon">
                    <img src="/ps-link.svg" alt="" />
                  </div>
                  <input
                    type="text"
                    placeholder="Show us your best work — add your portfolio link"
                  />
                </div>
              </div>
            </div>

            <div className="ps-save-button">
              <button>
                <p className="ps-save-button-txt">Save</p>
              </button>
            </div>
          </div>

          <div className="ps-section">
            <div className="ps-section-title">
              <div className="ps-hor-line"></div>
              <div className="ps-sec-mid">
                <img src="/ps-id-card.svg" alt="" />
                Connection Details
              </div>
              <div className="ps-hor-line"></div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field">
                <label>
                  Email <span className="ps-required">*</span>
                </label>
                <input type="email" defaultValue="chaitanyasai0000@gmail.com" />
                <a className="ps-action-link">
                  <svg
                    width="1.25vw"
                    height="1.25vw"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.75538 10.0586C5.09586 8.78669 5.76516 7.62688 6.69601 6.6957C7.62685 5.76452 8.78642 5.0948 10.0582 4.75386C11.3299 4.41292 12.669 4.41277 13.9408 4.75344C15.2126 5.09411 16.3723 5.76358 17.3034 6.69456L19.2064 8.59756H16.0234C15.8245 8.59756 15.6337 8.67657 15.493 8.81723C15.3524 8.95788 15.2734 9.14864 15.2734 9.34756C15.2734 9.54647 15.3524 9.73723 15.493 9.87789C15.6337 10.0185 15.8245 10.0976 16.0234 10.0976H21.0154C21.2143 10.0976 21.4051 10.0185 21.5457 9.87789C21.6864 9.73723 21.7654 9.54647 21.7654 9.34756V4.35556C21.7654 4.15664 21.6864 3.96588 21.5457 3.82523C21.4051 3.68457 21.2143 3.60556 21.0154 3.60556C20.8165 3.60556 20.6257 3.68457 20.485 3.82523C20.3444 3.96588 20.2654 4.15664 20.2654 4.35556V7.53556L18.3654 5.63556C17.2483 4.51801 15.8568 3.71424 14.3306 3.30506C12.8044 2.89588 11.1974 2.89571 9.67114 3.30456C8.14487 3.71342 6.75313 4.51689 5.63587 5.6342C4.5186 6.75151 3.71518 8.14327 3.30638 9.66956C3.2809 9.76476 3.27442 9.86406 3.28732 9.96177C3.30022 10.0595 3.33224 10.1537 3.38154 10.239C3.43085 10.3244 3.49649 10.3992 3.5747 10.4591C3.65291 10.5191 3.74217 10.5631 3.83737 10.5886C3.93258 10.614 4.03188 10.6205 4.12959 10.6076C4.2273 10.5947 4.32151 10.5627 4.40685 10.5134C4.49219 10.4641 4.56698 10.3984 4.62695 10.3202C4.68692 10.242 4.7309 10.1528 4.75638 10.0576L4.75538 10.0586ZM20.1634 13.4106C20.0682 13.385 19.969 13.3784 19.8713 13.3912C19.7736 13.404 19.6794 13.436 19.5941 13.4852C19.5087 13.5344 19.4339 13.5999 19.3739 13.6781C19.3139 13.7562 19.2699 13.8454 19.2444 13.9406C18.9039 15.2124 18.2346 16.3722 17.3037 17.3034C16.3729 18.2346 15.2133 18.9043 13.9416 19.2453C12.6698 19.5862 11.3308 19.5863 10.059 19.2457C8.78714 18.905 7.62742 18.2355 6.69637 17.3046L4.79438 15.4016H7.97738C8.17629 15.4016 8.36705 15.3225 8.5077 15.1819C8.64836 15.0412 8.72738 14.8505 8.72738 14.6516C8.72738 14.4526 8.64836 14.2619 8.5077 14.1212C8.36705 13.9806 8.17629 13.9016 7.97738 13.9016H2.98438C2.78546 13.9016 2.5947 13.9806 2.45405 14.1212C2.31339 14.2619 2.23438 14.4526 2.23438 14.6516V19.6436C2.23438 19.8425 2.31339 20.0332 2.45405 20.1739C2.5947 20.3145 2.78546 20.3936 2.98438 20.3936C3.18329 20.3936 3.37405 20.3145 3.51471 20.1739C3.65536 20.0332 3.73438 19.8425 3.73438 19.6436V16.4636L5.63437 18.3636C6.75147 19.4811 8.14311 20.2848 9.66935 20.694C11.1956 21.1031 12.8027 21.1032 14.3289 20.6942C15.8552 20.2852 17.2469 19.4816 18.3642 18.3642C19.4814 17.2468 20.2847 15.8549 20.6934 14.3286C20.7447 14.1365 20.7177 13.932 20.6183 13.7599C20.519 13.5878 20.3553 13.4621 20.1634 13.4106Z"
                      fill="#007AFF"
                    />
                  </svg>
                  Change your email
                </a>
              </div>
              <div className="ps-form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 000-0000-000" />
              </div>
            </div>

            <div className="ps-save-button">
              <button>
                <p className="ps-save-button-txt">Save</p>
              </button>
            </div>
          </div>

          <div className="ps-section">
            <div className="ps-section-title">
              <div className="ps-hor-line"></div>
              <div className="ps-sec-mid">
                <img src="./ps-lock-key.svg" alt="" />
                Password Change
              </div>
              <div className="ps-hor-line"></div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field" style={{ flex: "100%" }}>
                <label>
                  Current Password <span className="ps-required">*</span>
                </label>
                <input type="password" placeholder="Enter current password" />
                <a className="ps-action-link">Forgot password?</a>
              </div>
            </div>

            <div className="ps-form-group">
              <div className="ps-form-field">
                <label>
                  New Password <span className="ps-required">*</span>
                </label>
                <input type="password" placeholder="Enter new password" />
              </div>
              <div className="ps-form-field">
                <label>
                  Confirm New Password <span className="ps-required">*</span>
                </label>
                <input type="password" placeholder="Confirm new password" />
              </div>
            </div>

            <div className="ps-save-button">
              <button>
                <p className="ps-save-button-txt">Save</p>
              </button>
            </div>
          </div>

          <div className="ps-section">
            <div className="ps-section-title">
              <div className="ps-hor-line"></div>
              <div className="ps-sec-mid">
                <img src="/ps-trash.svg" alt="" />
                Account Removal
              </div>
              <div className="ps-hor-line"></div>
            </div>

            <p style={{ marginBottom: "0.9375vw" }}>
              Permanently delete your account and all of your chat.
            </p>

            <button className="ps-danger-button">Deactivate account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
