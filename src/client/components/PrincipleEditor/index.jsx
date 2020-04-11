import React, { useState } from 'react';
import CircleButton from '../CircleButton';
import './PrincipleEditor.scss';

function PrincipleEditor ({ data, handleClose, handleSaveNew, handleDelete, handleUpdate }) {
  const [input, setInput] = useState(data.content);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log('submitting');
    if (data.id) {
      handleUpdate({ content: input, id: data.id });
    } else {
      handleSaveNew({ content: input });
    }
    handleClose();
  };
  const onEnterPress = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      handleSubmit(event);
    }
  };
  const handleDeletion = () => {
    console.log('deleting', data.id);
    handleDelete({ id: data.id });
    handleClose();
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='principle-editor-container' onClick={handleClick}>
      <form id='principle-editor-form'>
        <textarea
          id='principle-editor-input'
          onChange={handleChange}
          name='principle'
          type='text'
          wrap='soft'
          autoComplete='off'
          /* eslint-disable */ // need both required and value for styling
          required={true}
          value={input}
          onKeyDown={onEnterPress}
        />
        <label id='principle-editor-label' name='principle'>
          <span id='principle-editor-label-text'>Wisdom Goes Here</span>
        </label>
      </form>
      <div id='principle-editor-buttons'>
        <div className='principle-editor-button'>
          {data.id && <CircleButton name='delete' icon={'\u2421'} onClick={handleDeletion} />}
        </div>
        <div className='principle-editor-button'>
          <CircleButton name='submit' icon={'\u2713'} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default PrincipleEditor;
