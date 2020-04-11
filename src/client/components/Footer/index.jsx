import React from 'react';
import gitMark from '../../const/git_mark.png';
import './Footer.scss';

function Footer () {
  return (
    <div id='footer-container'>
      <div id='footer-content'>
        <span className='footer-text'>
        Project by Lena Mikhaylova
        </span>
        <a className='footer-text' id='github-link' href='https://github.com/elenamik/SmallReminders'>
          <img id='git-mark' src={gitMark} />
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
