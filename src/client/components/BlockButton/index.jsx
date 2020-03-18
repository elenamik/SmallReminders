import React from 'react';
import './BlockButton.scss';

function BlockButton (props) {
  return (
    <div className='block-button-container'>
      {props.children}
    </div>
  );
}

export default BlockButton;
