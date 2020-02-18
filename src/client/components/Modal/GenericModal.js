import React from 'react';
import './Modal.scss';

function GenericModal (props) {
  return (
    <div id='surface'>
      <div id='modal-container'>
        {props.children}
      </div>
    </div>
  );
}

export default GenericModal;
