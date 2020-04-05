import React from 'react';
// import './Principle.scss';

function Principle ({ content, id, openEditor }) {
  const handleClick = () => {
    console.log('opening editor with payload', { content, id });
    openEditor({ content, id });
  };
  return (
    <div id='principle' onClick={handleClick}>
      {content}
    </div>
  );
}

export default Principle;
