import React, { useState, useRef } from 'react';
import PrinciplesList from '../PrinciplesList';
import samplePrinciples from '../../../server/constants/sample';
import ScrollToButton from '../../components/ScrollToButton';
import { ADD_PRINCIPLE, DELETE_PRINCIPLE_BY_ID, UPDATE_PRINCIPLE_BY_ID } from '../../redux/constants';
import './Demo.scss';

function Demo () {
  const [principles, updatePrinciples] = useState(samplePrinciples);
  const demoRef = useRef();

  const scrollToDemo = () => {
    demoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const update = (action, payload) => {
    // types of actions -- delete, add, update
    switch (action) {
      case ADD_PRINCIPLE:
        principles.push({
          content: payload.content,
          _id: Math.floor(Math.random() * 100 + 10)
        });
        updatePrinciples(principles);
        break;
      case DELETE_PRINCIPLE_BY_ID:
        updatePrinciples(principles.filter((elem) => {
          return elem._id !== payload.id;
        }));
        break;
      case UPDATE_PRINCIPLE_BY_ID:
        updatePrinciples(principles.filter((elem) => {
          console.log('updating');
          if (elem._id === payload.id) {
            elem.content = payload.content;
          }
          return elem;
        }));
        break;
    }
  };

  return (
    <div className='demo-container'>
      <ScrollToButton text='Try the Demo' scrollToRef={scrollToDemo} />
      <div ref={demoRef}>
        <PrinciplesList data={principles} update={update} />
      </div>
    </div>
  );
}

export default Demo;
