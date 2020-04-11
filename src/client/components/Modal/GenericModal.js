import React from 'react';
import Surface from '../Surface';
import './Modal.scss';

function GenericModal ({ children, handleClose }) {
  return (
    <Surface handleClose={handleClose}>
      <div id='modal-container'>
        {children}
      </div>
    </Surface>
  );
}

export default GenericModal;
