import React from 'react';
import './Modal.scss';

function GenericModal ({ children }) {
  return (
    <div id='surface'>
      <div id='modal-container'>
        {children}
      </div>
    </div>
  );
}

export default GenericModal;
