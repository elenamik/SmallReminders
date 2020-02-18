import React, { useState } from 'react';
import CircleButton from '../CircleButton';
import './PrincipleEditor.scss';

function PrincipleEditor ({ data, handleClose, handleSaveNew, handleDelete, handleUpdate }) {
  console.log('data inside editor', data);
  const [input, setInput] = useState(data.content);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    if (data.id) {
      handleUpdate({ content: input, id: data.id });
    } else {
      handleSaveNew({ content: input });
    }
    handleClose();
  };

  const handleDeletion = () => {
    handleDelete({ id: data.id });
    handleClose();
  };

  return (
    <div className='principle-editor-container'>
      <form id='principle-editor-form'>
        <textarea
          className='principle-input'
          onChange={handleChange}
          name='principle'
          type='text'
          wrap='soft'
          autoComplete='off'
          /* eslint-disable */ // need both required and value for styling
          required={true}
          value={input}
        />
        <label className='principle-editor-label' for='principle'>
          <span className='principle-editor-label-text'>Wisdom Goes Here</span>
        </label>
      </form>
      <div className='principle-editor-buttons'>
        <CircleButton name='exit' icon={'\u241B'} onClick={handleClose} />
        {data.id && <CircleButton name='delete' icon={'\u2421'} onClick={handleDeletion} />}
        <CircleButton name='submit' icon={'\u2713'} onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default PrincipleEditor;
