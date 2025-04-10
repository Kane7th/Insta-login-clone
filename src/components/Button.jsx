import React from "react";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`login-button ${disabled ? "disabled" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
