import React, { useState } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Register Intern</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
