import React, { useState, useEffect, use } from "react";
import SideBar from "../SideBar/SideBar";
import "../Registeration/RegCSS/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import RegNavBar from "./RegNavBar";

const SignUp = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    navigate(-1);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passContainMixChars, setPassContainMixChars] = useState(false);
  const [passContainSpecialChars, setPassContainSpecialChars] = useState(false);
  const [passContainNumbers, setPassContainNumbers] = useState(false);
  const allRequirementsMet =
    passContainMixChars &&
    passContainSpecialChars &&
    passContainNumbers &&
    !emailError;
  useEffect(() => {
    const password = formData.password;
    setPassContainMixChars(/[a-z]/.test(password) && /[A-Z]/.test(password));
    setPassContainSpecialChars(/[^a-zA-Z0-9]/.test(password));
    setPassContainNumbers(/[0-9]/.test(password));
  }, [formData.password]);

  useEffect(() => {
    const email = formData.email;
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [formData.email]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordRequirementsVisible, setIsPasswordRequirementsVisible] =
    useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);
  const [formHeight, setFormHeight] = useState("34.625rem");

  useEffect(() => {
    const { firstName, lastName, email, password } = formData;
    const isFormValid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "";
    setIsSubmitButtonActive(isFormValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    if (id === "password") {
      setIsPasswordRequirementsVisible(value.length > 0);
      setFormHeight(value.length > 0 ? "39.5625rem" : "34.625rem");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="sign-up" style={{ height: "100vh", width: "100vw" }}>
      <SideBar />
      <main className="page-container">
        <section className="form-modal-cover">
          <section className="form-modal" style={{ height: formHeight }}>
            <div className="form-content">
              <header className="form-header">
                <img
                  src="./Signup-Vector.svg"
                  alt="Signup Vector"
                  className="signup-bgrid"
                />
                <div className="centre-icon">
                  <img
                    src="./signup-logo.svg"
                    alt="signup-logo"
                    className="signup-logo"
                  />
                </div>
              </header>
              <section className="welcome-section">
                <h1 className="welcome-title">Welcome Onboard!</h1>
                <p className="welcome-subtitle">
                  Your journey starts here—let's build something CRAZY!
                </p>
              </section>
              <section className="form-section">
                <form className="form-container">
                  <div className="input-row">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="firstName"
                        className="form-input"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="firstName" className="floating-label">
                        FIRST NAME
                      </label>
                    </div>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="lastName"
                        className="form-input"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="lastName" className="floating-label">
                        LAST NAME
                      </label>
                    </div>
                  </div>
                  <div className="stacked-inputs">
                    <div className="input-wrapper top-input">
                      <input
                        type="text"
                        id="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="email" className="floating-label">
                        EMAIL
                      </label>
                    </div>
                    <div className="input-wrapper bottom-input">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        className="form-input"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="password" className="floating-label">
                        PASSWORD
                      </label>
                      {formData.password && (
                        <img
                          id="eyeIcon"
                          src={
                            isPasswordVisible
                              ? "./signup-eye-slash.svg"
                              : "./signup-eye-icon.svg"
                          }
                          className="eye-icon"
                          alt="Toggle Password Visibility"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </div>

                    {isPasswordRequirementsVisible && (
                      <div className="password-requirements">
                        <div className="requirement">
                          <p
                            className={
                              passContainMixChars
                                ? "requirement-text-green"
                                : "requirement-text-red"
                            }
                          >
                            <img
                              src={
                                passContainMixChars
                                  ? "./signup-check-logo.svg"
                                  : "./x-circle.svg"
                              }
                              className="requirement-icon"
                              alt="x"
                            />
                            Mix of uppercase & lowercase letter
                          </p>
                        </div>
                        <p
                          className={
                            passContainSpecialChars
                              ? "requirement-text-green"
                              : "requirement-text-red"
                          }
                        >
                          <img
                            src={
                              passContainSpecialChars
                                ? "./signup-check-logo.svg"
                                : "./x-circle.svg"
                            }
                            className="requirement-icon"
                            alt="x"
                          />
                          Contain at least 1 special character
                        </p>
                        <p
                          className={
                            passContainNumbers
                              ? "requirement-text-green"
                              : "requirement-text-red"
                          }
                        >
                          <img
                            src={
                              passContainNumbers
                                ? "./signup-check-logo.svg"
                                : "./x-circle.svg"
                            }
                            className="requirement-icon"
                            alt="x"
                          />
                          Contain at least 1 number
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className={`submit-button ${
                      isSubmitButtonActive && allRequirementsMet
                        ? "active-button"
                        : ""
                    }`}
                    disabled={!isSubmitButtonActive}
                  >
                    {isSubmitButtonActive ? (
                      <Link to="/otp-verify">Generate OTP</Link>
                    ) : (
                      "Generate OTP"
                    )}
                  </button>
                </form>
                <footer className="form-footer">
                  <p className="account-text">Already have an account?</p>
                  <Link to="/login" className="signin-link">
                    Sign in
                  </Link>
                </footer>
              </section>
            </div>
          </section>
        </section>
        <RegNavBar />
        <img src="./signup-clouds.svg" alt="clouds" className="clouds" />
        <button className="sign-up-exit" onClick={handleExitClick}>
          <img src="./x-icon.svg" alt="back" />
        </button>
      </main>
    </div>
  );
};

export default SignUp;
