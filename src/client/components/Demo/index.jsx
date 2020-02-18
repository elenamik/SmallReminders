import React, { useState } from 'react';
import './Demo.scss';
import PrinciplesList from '../PrinciplesList';
import samplePrinciples from '../../../server/constants/sample';
import { ADD_PRINCIPLE, DELETE_PRINCIPLE_BY_ID, UPDATE_PRINCIPLE_BY_ID } from '../../redux/constants';

function Demo () {
  const [principles, updatePrinciples] = useState(samplePrinciples);
  // useEffect(() => {

  // }, []);
  const update = (action, payload) => {
    // types of actions -- delete, add, change
    switch (action) {
      case ADD_PRINCIPLE:
        principles.unshift({
          content: payload.content,
          _id: Math.floor(Math.random() * 100 + 10)
        });
        updatePrinciples(principles);
    }
  };

  return (
    <div className='demo-container'>
      <h3 className='demo-header'>Try Out The Demo</h3>
      <PrinciplesList data={principles} update={update} />
    </div>
  );
}

export default Demo;
