import React from 'react';
import ViewTemplate from '../ViewTemplate';
import Demo from '../../components/Demo';
import './Welcome.scss';

function Welcome () {
  return (
    <ViewTemplate title='Welcome to Small Reminders!' id='welcome-view'>
      <p>
    You may be familiar with Ray Dalio's famous concept of principles - lessons you learn in life, and keep with you to influence your future decisions.
    The challenge that our media-rich culture presents is the fact that we may discover such a lesson, and forget it after a few days.
    Despite having written it down in your notes, maybe even hung it up on your wall, it eventually fades into the background and you forget.
      </p>
      <p>
    Feel free to use this app as memorable repository, as well as a tool to send yourself reminders.
      </p>
      <Demo />
    </ViewTemplate>
  );
}

export default Welcome;
