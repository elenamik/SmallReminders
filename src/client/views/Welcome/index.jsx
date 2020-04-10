import React, { useEffect, useState, useRef } from 'react';
import ViewTemplate from '../ViewTemplate';
import textIllustration from '../../const/texts_illustration.png';
import downArrows from '../../const/down_arrows.png';
import book from '../../const/book.png';
import trashBin from '../../const/trashbin.png';
import phone from '../../const/phone.png';
import Demo from '../../components/Demo';
import './Welcome.scss';

function Welcome ({ user }) {
  const [loading, setLoading] = useState(true);
  const myRef = useRef();
  useEffect(() => {
    const awaitUser = async () => {
      await user;
      setLoading(false);
    };
    awaitUser();
  });
  const scrollToRef = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <ViewTemplate title='' id='welcome-view'>
      <div id='hero'>
        <div id='hero-text'>
          <h1>
            Welcome to Small Reminders!
          </h1>
          <p>A place for you to store concepts meaningful to you, and send yourself reminders!</p>
        </div>
        <img id='hero-image' src={textIllustration} />
      </div>
      <button id='learn-more-button' onClick={scrollToRef} ref={myRef}>
        <span>Learn More</span>
        <img id='down-arrows' src={downArrows} />
      </button>
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
      {!loading && !user && <Demo />}
    </ViewTemplate>
  );
}

export default Welcome;
