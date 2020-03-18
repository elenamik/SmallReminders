import React from 'react';
import ViewTemplate from '../../components/ViewTemplate';
import BlockButton from '../../components/BlockButton';
import textIllustration from '../../const/texts_illustration.png';
import downArrows from '../../const/down_arrows.png';
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
      <BlockButton>
        <span>Learn More</span>
        <img id='down-arrows' src={downArrows} />
      </BlockButton>
    </ViewTemplate>
  );
}

export default Welcome;
