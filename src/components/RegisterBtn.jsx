import React from "react";
import "../CSS/RegisterBtn.css";
import { Link } from "react-router-dom";

const RegisterBtn = () => {
  return (
    <button className="register">
      <Link to="/signup">
        <span className="register__text">Register</span>
      </Link>
    </button>
  );
};

export default RegisterBtn;
