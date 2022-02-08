import React from 'react';
import './Modal.scss';

const Modal = ({ open, onClose, children }) => {
  if (open === false) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button className="button-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
