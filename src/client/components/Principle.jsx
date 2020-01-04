import React from 'react';

function Principle (props) {
  return (
    <div id='principle'>
      {props.content}
      <style jsx>{`
        #principle {
          color: black;
          padding: 2%;
          border: solid;
          margin: 1%;
          border-color: blue;
          border-radius: 10%;
          width: 50%;
          text-align: center;
          margin: auto;
          margin-top: 2%;
          margin-bottom: 2%;
        }
      `}
      </style>
    </div>
  );
}

export default Principle;
