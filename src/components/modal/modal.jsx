import React from "react";
import "./modal.css";

function Modal({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
export default Modal;
