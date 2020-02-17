import React from 'react';
import CircleButton from '../CircleButton';
import './Modal.scss';

function GenericModal (props) {
  return (
    <div id='surface'>
      <div id='modal-container'>
        {props.children}
        <CircleButton icon='x' onClick={props.handleClose} />
      </div>
    </div>
  );
}

export default GenericModal;
