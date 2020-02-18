import React from 'react';
import './CircleButton.scss';

function CircleButton (props) {
  return (
    <div className='circle-button-container' onClick={props.onClick}>
      <div className='circle-button-content'>{props.icon}</div>
    </div>
  );
}

export default CircleButton;
