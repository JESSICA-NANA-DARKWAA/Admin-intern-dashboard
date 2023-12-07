import React from "react";
import "./Button.css";

const Button = (props) => {
  const { onClick, label, disabled = false, className, type } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
