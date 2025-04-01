import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "../Registeration/RegCSS/SignUp.css";
import { Link,useNavigate } from "react-router-dom";
import RegNavBar from "./RegNavBar";

const SignUp = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    navigate(-1); // This will navigate to the previous page
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
      <RegNavBar />
      <main className="page-container">
        <section className="form-modal-cover">
          <section className="form-modal" style={{ height: formHeight }}>
            <div className="form-content">
              <header className="form-header">
                <img src="./Signup-Vector.svg" alt="Signup Vector" />
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
                      />
                      <label htmlFor="lastName" className="floating-label">
                        LAST NAME
                      </label>
                    </div>
                  </div>
                  <div className="stacked-inputs">
                    <div className="input-wrapper top-input">
                      <input
                        type="text  "
                        id="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                          <p className="requirement-text-green">
                            <img
                              src="./signup-check-logo.svg"
                              className="requirement-icon"
                              alt=""
                            />
                            Mix of uppercase & lowercase letter
                          </p>
                        </div>
                        <ul>
                          <li className="requirement-text">
                            Contain at least 1 special character
                          </li>
                          <li className="requirement-text">
                            Contain at least 1 number
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className={`submit-button ${
                      isSubmitButtonActive ? "active-button" : ""
                    }`}
                    disabled={!isSubmitButtonActive}
                  >
                    Generate OTP
                  </button>
                </form>
                <footer className="form-footer">
                  <p className="account-text">Already have an account?</p>
                  <a className="signin-link">Sign in</a>
                </footer>
              </section>
            </div>
          </section>
        </section>
        <button className="sign-up-exit" onClick={handleExitClick}>
          <img src="./x-icon.svg" alt="back" />
        </button>
      </main>
    </div>
  );
};

export default SignUp;
