import React from 'react';
import './Footer.scss';

function Footer () {
  return (
    <div id='footer-container'>
      <div id='footer-content'>
        <span className='footer-text'>
        Project by Lena Mikhaylova
        </span>
        <a className='footer-text' id='github-link' href='https://github.com/elenamik/SmallReminders'>Check it out on github</a>
      </div>
    </div>
  );
}

export default Footer;
