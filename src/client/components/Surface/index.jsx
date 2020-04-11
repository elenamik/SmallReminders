import React from 'react';
import './Surface.scss';

function Surface (props) {
  return (
    <div className='surface' onClick={props.handleClose}>
      {props.children}
    </div>
  );
}

export default Surface;
