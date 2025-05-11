import React from "react";
import "../CSS/RegisterBtn.css";
import { Link } from "react-router-dom";

const RegisterBtn = () => {
  return (
    <div className="register">
      <Link to="/signup">
        <span className="register__text">Register</span>
      </Link>
    </div>
  );
};

export default RegisterBtn;
