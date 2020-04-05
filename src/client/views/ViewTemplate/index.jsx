import React from 'react';
import './viewTemplate.scss';

function ViewTemplate (props) {
  return (
    <div className='view'>
      <div className='view-header-container'>
        <div className='view-header'>
          {props.title && <h1 className='view-header-text'>{props.title}</h1>}
        </div>
      </div>
      <div className='view-content-container'>
        <div className='view-content' id={props.id}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ViewTemplate;
