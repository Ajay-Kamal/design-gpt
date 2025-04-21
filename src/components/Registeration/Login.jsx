import React, { useState, useEffect } from "react";
import LogNavBar from "./LogNavBar";
import SideBar from "../SideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import "./RegCSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleExitClick = () => {
    navigate(-1);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);

  useEffect(() => {
    const { email, password } = formData;
    const isFormValid = email.trim() !== "" && password.trim() !== "";
    setIsSubmitButtonActive(isFormValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-page">
      <LogNavBar />
      <SideBar />
      <main className="page-container">
        <section className="form-modal-cover">
          <section className="form-modal">
            <div className="form-content">
              <header className="form-header">
                <img
                  src="./Signup-Vector.svg"
                  alt="Signup Vector"
                  className="login-bgrid"
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
                <h1 className="welcome-title">Hello Again!</h1>
                <p className="welcome-subtitle">
                  Let's pick up where you left off and create something CRAZY!
                </p>
              </section>
              <section className="form-section">
                <form className="form-container" onSubmit={handleSubmit}>
                  <div className="stacked-inputs">
                    <div className="input-wrapper top-input">
                      <input
                        type="name"
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
                      {formData.password.length > 0 && (
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
                  </div>
                  <button
                    type="submit"
                    className={`submit-button ${
                      isSubmitButtonActive ? "active-button" : ""
                    }`}
                    disabled={!isSubmitButtonActive}
                  >
                    Login
                  </button>
                  <button type="button" className="forgot-button">
                    Forgot Password?
                  </button>
                </form>
                <div className="grey-line"></div>
                <footer className="form-footer">
                  <p className="account-text">Don't have an account?</p>
                  <Link to="/signup" className="signin-link">
                    Sign up
                  </Link>
                </footer>
              </section>
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

export default Login;
