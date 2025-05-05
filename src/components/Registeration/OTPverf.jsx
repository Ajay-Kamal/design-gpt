import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import LogNavBar from "./LogNavBar";
import "./RegCSS/OTP.css";
import { Link, useNavigate } from "react-router-dom";

const OTPverf = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    navigate(-1);
  };

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.querySelectorAll(".otp-field")[index + 1];
        if (nextInput) nextInput.focus();
      }

      checkFields(newOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.querySelectorAll(".otp-field")[index - 1];
      if (prevInput) prevInput.focus();
    }
  };

  const checkFields = (otpArray) => {
    const isFilled = otpArray.every((digit) => digit.length === 1);
    setIsSubmitEnabled(isFilled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
  };

  useEffect(() => {
    setCountdown(30);
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const handleResendOTP = () => {
    setCountdown(30);
    setOtp(["", "", "", "", "", ""]);
    setIsSubmitEnabled(false);
    document.querySelectorAll(".otp-field")[0].focus();
  };

  return (
    <div className="otp-verify" style={{ height: "100vh", width: "100vw" }}>
      <SideBar />
      <LogNavBar />
      <main className="otp-page-container">
        <section className="otp-form-modal-cover">
          <section className="otp-form-modal">
            <div className="otp-form-content">
              <header className="otp-form-header">
                <img
                  src="Signup-Vector.svg"
                  alt="Signup Vector"
                  className="otp-grid"
                />
                <div className="otp-centre-icon">
                  <img
                    src="signup-logo.svg"
                    alt="signup-logo"
                    className="otp-signup-logo"
                  />
                </div>
              </header>
              <section className="otp-welcome-section">
                <h1 className="otp-welcome-title">OTP verification</h1>
                <p className="otp-welcome-subtitle">
                  <p>
                    Please enter the 6 digit verification code we have sent to
                    your email,
                  </p>
                  <span className="user-email">usermail@gmail.com </span>
                  <a
                    href="#"
                    className="otp-change-email"
                    style={{ color: "blue" }}
                  >
                    Change email
                  </a>
                </p>
              </section>
              <section className="otp-input-section">
                <div className="otp-group">
                  {otp.slice(0, 3).map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className="otp-field"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      aria-label={`OTP digit ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="otp-separator">-</span>
                <div className="otp-group">
                  {otp.slice(3).map((digit, index) => (
                    <input
                      key={index + 3}
                      type="text"
                      className="otp-field"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(e, index + 3)}
                      onKeyDown={(e) => handleKeyDown(e, index + 3)}
                      aria-label={`OTP digit ${index + 4}`}
                    />
                  ))}
                </div>
              </section>
              <div className="otp-error">
                <img src="./popup-uploaderror.svg" alt="!" />
                <p>This code isn't valid. Have another go!</p>
              </div>
              <form className="otp-form-container" onSubmit={handleSubmit}>
                <Link
                  to="/avatar-section"
                  style={{ height: "max-content", width: "max-content" }}
                >
                  <button
                    type="submit"
                    className={`otp-submit-button ${
                      isSubmitEnabled ? "otp-active-button" : ""
                    }`}
                    disabled={!isSubmitEnabled}
                  >
                    Verify
                  </button>
                </Link>
              </form>
              <div className="otp-grey-line"></div>
              <footer className="otp-form-footer">
                <p className="otp-account-text">Didn’t receive the OTP?</p>
                <button
                  id="otp-resend"
                  className={`otp-resend${
                    countdown === 0
                      ? " otp-resend-gradient"
                      : " otp-resend-disabled"
                  }`}
                  onClick={handleResendOTP}
                  disabled={countdown !== 0}
                  style={{
                    cursor: countdown === 0 ? "pointer" : "not-allowed",
                  }}
                >
                  {countdown ? "Request a new code in" : "Resend OTP"}
                </button>
                <p id="otp-timer" className="otp-timer">
                  (00:
                  <span id="countdown">
                    {String(countdown).padStart(2, "0")}
                  </span>
                  )
                </p>
              </footer>
            </div>
          </section>
        </section>
        <img src="./signup-clouds.svg" alt="clouds" className="clouds" />
        <button className="sign-up-exit" onClick={handleExitClick}>
          <img src="./x-icon.svg" alt="back" />
        </button>
      </main>
    </div>
  );
};

export default OTPverf;
