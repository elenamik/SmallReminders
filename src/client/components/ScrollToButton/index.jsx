import React from 'react';
import downArrows from '../../const/down_arrows.png';
import './ScrollToButton.scss';

function ScrollToButton ({ text, scrollToRef }) {
  return (
    <button id='scroll-to-button' onClick={scrollToRef}>
      <span>{text}</span>
      <img id='down-arrows' src={downArrows} />
    </button>
  );
}

export default ScrollToButton;
