import React from 'react';
import './CircleButton.scss';

function CircleButton (props) {
  return (
    <div className='add-button-container' onClick={props.onClick}>
      <div className='add-button-content'>{props.icon}</div>
    </div>
  );
}

export default CircleButton;
