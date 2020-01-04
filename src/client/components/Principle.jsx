import React from 'react';

function Principle (props) {
  console.log(props);
  return (
    <div id='principle'>
      {props.content}
    </div>
  );
}

export default Principle;
