import React from 'react';
import './Welcome.scss';
import '../../styles/views.scss';

function Welcome () {
  return (
    <div className='view'>
      <div className='view-header-container'>
        <div className='view-header'>
          <h1 className='view-header-text'>Welcome to Small Reminders!</h1>
        </div>
      </div>
      <div className='view-content-container'>
        <div className='view-content' id='welcome-text'>
          <p>
        You may be familiar with Ray Dalio's famous concept of principles - lessons you learn in life, and keep with you to influence your future decisions.
        The challenge that our media-rich culture presents is the fact that we may discover such a lesson, and forget it after a few days.
        Despite having written it down in your notes, maybe even hung it up on your wall, it eventually fades into the background and you forget.
          </p>
          <p>
          Feel free to use this app as memorable repository, as well as a tool to send yourself reminders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
