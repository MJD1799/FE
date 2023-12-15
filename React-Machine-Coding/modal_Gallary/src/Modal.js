import React from "react";

const Modal = ({ onClose, title, children }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-wrapper">
        <div className="modal-heading">
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </div>
        <section className="modal-body">{children || 1}</section>
      </div>
    </>
  );
};

export default Modal;
