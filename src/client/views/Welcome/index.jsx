import React from 'react';
import ViewTemplate from '../../components/ViewTemplate';
import textIllustration from '../../const/texts_illustration.png';
import downArrows from '../../const/down_arrows.png';
import book from '../../const/book.png';
import trashBin from '../../const/trashbin.png';
import phone from '../../const/phone.png';
import Demo from '../../components/Demo';
import './Welcome.scss';

function Welcome () {
  return (
    <ViewTemplate title='' id='welcome-view'>
      <div id='hero'>
        <div id='hero-text'>
          <h1>
            Welcome to Small Reminders!
          </h1>
          <p>A way to randomly remind yourself of meaningful concepts</p>
        </div>
        <img id='hero-image' src={textIllustration} />
      </div>
      <div id='learn-more-button'>
        <span>Learn More</span>
        <img id='down-arrows' src={downArrows} />
      </div>
      <div className='welcome-subcontent'>
        <div className='subtext'>
          In the vein of Ray Dalios Principles, there are lessons you learn in life which can help you make decisions in the future.
        </div>
        <img className='subtext-icon' src={book} />
      </div>
      <div className='welcome-subcontent'>
        <img className='subtext-icon' src={trashBin} />
        <div className='subtext'>
        In our information overloaded culture, it can be hard to keep track of these things, and we frequently forget them.
        </div>
      </div>
      <div className='welcome-subcontent'>
        <div className='subtext'>
        This project is a response to that. It serves as a place for you to store your Principles, and enable random reminders so they never fade into the background.
        </div>
        <img className='subtext-icon' src={phone} />
      </div>
      <div className='demo-subcontent'>
        Try the demo
        <Demo />
      </div>
    </ViewTemplate>
  );
}

export default Welcome;
