import React from "react";
import "../CSS/RegisterBtn.css";
import { Link } from "react-router-dom";

const RegisterBtn = () => {
  return (
    <Link to="/signup">
      <button className="register">
        <span className="register__text">Register</span>
      </button>
    </Link>
  );
};

export default RegisterBtn;
