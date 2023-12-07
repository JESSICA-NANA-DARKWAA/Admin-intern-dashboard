import React from "react";
import "./TextInput.css";

const TextInput = ({
  label,
  name,
  placeholder,
  type,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="form-box">
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <br />
      <input
        className="form-control"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default TextInput;
