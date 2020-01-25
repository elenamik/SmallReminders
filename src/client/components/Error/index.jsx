import React from 'react';
import './Error.scss';

function Error (props) {
  return (
    <div className='error-container'>
      {props.text}
    </div>
  );
}

export default Error;
