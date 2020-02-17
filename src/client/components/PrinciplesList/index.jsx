import React, { useState } from 'react';
import Principle from '../Principle';
import CircleButton from '../CircleButton';
import PrincipleEditor from '../PrincipleEditor';
import Modal from '../Modal';
import './PrinciplesList.scss';

function PrinciplesList (props) {
  const [editing, setEditing] = useState(true);

  const principles = props.data;
  let list;
  if (principles) {
    list = principles.map((element, key) => {
      return (
        <Principle content={element.content} key={key} />
      );
    });
  }
  const handeClick = () => {
    setEditing(true);
  };

  const handleClose = () => {
    setEditing(false);
  };

  return (
    <>
      <div id='principles-list'>
        {list}
      </div>
      <CircleButton icon='+' onClick={handeClick} />
      {editing &&
        <Modal id='modal-root' handleClose={handleClose}>
          <PrincipleEditor />
        </Modal>}
    </>
  );
}

export default PrinciplesList;
