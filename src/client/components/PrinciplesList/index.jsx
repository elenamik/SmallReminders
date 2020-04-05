import React, { useState } from 'react';
import Principle from '../Principle';
<<<<<<< HEAD
// import './PrinciplesList.scss';
=======
import CircleButton from '../CircleButton';
import PrincipleEditor from '../PrincipleEditor';
import Modal from '../Modal';
import { ADD_PRINCIPLE, DELETE_PRINCIPLE_BY_ID, UPDATE_PRINCIPLE_BY_ID } from '../../redux/constants';
import './PrinciplesList.scss';
>>>>>>> a6969e5caaac7fda96a237da9e90f9ba6ca40cf8

function PrinciplesList ({ data, update }) {
  const [editing, setEditing] = useState(false);
  const handeClick = () => {
    setEditing(true);
  };
  const openEditor = (payload) => {
    setEditing(payload);
  };
  const handleClose = () => {
    setEditing(false);
  };
  const handleSaveNew = (payload) => {
    update(ADD_PRINCIPLE, payload);
  };
  const handleDelete = (payload) => {
    console.log('payload inside p list', payload);
    update(DELETE_PRINCIPLE_BY_ID, payload);
  };
  const handleUpdate = payload => {
    update(UPDATE_PRINCIPLE_BY_ID, payload);
  };

  const principles = data;
  let list;
  if (principles) {
    list = principles.map((element, key) => {
      return (
        <Principle content={element.content} id={element._id} openEditor={openEditor} key={key} />
      );
    });
  }

  return (
    <>
      <CircleButton icon={'\uFF0B'} onClick={handeClick} />
      <div id='principles-list'>
        {list}
      </div>
      {editing &&
        <Modal id='modal-root'>
          <PrincipleEditor
            data={editing}
            handleClose={handleClose}
            handleSaveNew={handleSaveNew}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </Modal>}
    </>
  );
}

export default PrinciplesList;
