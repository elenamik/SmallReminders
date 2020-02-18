import React, { useState } from 'react';
import Principle from '../Principle';
import CircleButton from '../CircleButton';
import PrincipleEditor from '../PrincipleEditor';
import Modal from '../Modal';
import { ADD_PRINCIPLE, DELETE_PRINCIPLE_BY_ID, UPDATE_PRINCIPLE_BY_ID } from '../../redux/constants';
import './PrinciplesList.scss';

function PrinciplesList ({ data, update }) {
  const [editing, setEditing] = useState(true);

  const principles = data;
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

  const handleSaveNew = (payload) => {
    update(ADD_PRINCIPLE, payload);
  };

  return (
    <>
      <div id='principles-list'>
        {list}
      </div>
      <CircleButton icon='+' onClick={handeClick} />
      {editing &&
        <Modal id='modal-root'>
          <PrincipleEditor handleClose={handleClose} handleSaveNew={handleSaveNew} />
        </Modal>}
    </>
  );
}

export default PrinciplesList;
