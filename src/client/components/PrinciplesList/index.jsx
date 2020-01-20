import React from 'react';
import Principle from '../Principle';

function PrinciplesList (props) {
  const principles = props.data;
  let list;
  if (principles) {
    list = principles.map((element, key) => {
      return (
        <Principle content={element.content} key={key} />
      );
    });
  }

  return (
    <div id='principles-list'>
      {list}
    </div>
  );
}

export default PrinciplesList;
