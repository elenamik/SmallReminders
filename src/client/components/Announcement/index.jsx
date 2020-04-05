import React from 'react';
import './Announcement.scss';

function Announement ({ message }) {
  return (
    <div className='announcement-container'>
      <span className='announcement-icon'>Announcement:</span>
      <p className='announcement-content'>{message}</p>
    </div>
  );
}

export default Announement;
