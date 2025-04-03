import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import LogNavBar from "./LogNavBar";
import "./RegCSS/OTP.css";

const OTPverf = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State to store each digit of the OTP
  const [countdown, setCountdown] = useState(30); // Countdown timer for resend OTP
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false); // State to enable/disable submit button
  const [isCountdownActive, setIsCountdownActive] = useState(false); // State to control countdown animation

  // Handle input change for each OTP field
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only numeric input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus the next input field
      if (value && index < 5) {
        const nextInput = document.querySelectorAll(".otp-field")[index + 1];
        if (nextInput) nextInput.focus();
      }

      // Check if all fields are filled
      checkFields(newOtp);
    }
  };

  // Handle key press for backspace to move to the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.querySelectorAll(".otp-field")[index - 1];
      if (prevInput) prevInput.focus();
    }
  };

  // Check if all OTP fields are filled
  const checkFields = (otpArray) => {
    const isFilled = otpArray.every((digit) => digit.length === 1);
    setIsSubmitEnabled(isFilled);
  };

  // Combine OTP digits into a single variable
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join(""); // Combine all digits into a single string
    console.log("Entered OTP:", otpCode);
    // Add your verification logic here
  };

  // Countdown timer for resend OTP
  useEffect(() => {
    if (isCountdownActive && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setIsCountdownActive(false); // Stop the countdown when it reaches 0
    }
  }, [isCountdownActive, countdown]);

  // Restart countdown when resend OTP is clicked
  const handleResendOTP = () => {
    console.log("Resend OTP clicked");
    setCountdown(30); // Reset countdown to 30 seconds
    setOtp(["", "", "", "", "", ""]); // Clear OTP fields
    setIsSubmitEnabled(false); // Disable submit button
    setIsCountdownActive(true); // Start the countdown
    document.querySelectorAll(".otp-field")[0].focus(); // Focus on the first input
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
                <img src="Signup-Vector.svg" alt="Signup Vector" />
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
                  Please enter the 6 digit verification code we have sent to
                  your email,
                  <a href="#" className="otp-change-email">
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
              <section className="otp-form-section">
                <form className="otp-form-container" onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    className={`otp-submit-button ${
                      isSubmitEnabled ? "otp-active-button" : ""
                    }`}
                    disabled={!isSubmitEnabled}
                  >
                    Verify
                  </button>
                </form>
                <div className="otp-grey-line"></div>
                <footer className="otp-form-footer">
                  <p className="otp-account-text">Didn’t receive the OTP?</p>
                  {isCountdownActive ? (
                    <p id="otp-timer" className="otp-timer">
                      Resend in (<span id="countdown">{countdown}</span>s)
                    </p>
                  ) : (
                    <button
                      id="otp-resend"
                      className="otp-resend"
                      onClick={handleResendOTP}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      Resend OTP
                    </button>
                  )}
                </footer>
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default OTPverf;
