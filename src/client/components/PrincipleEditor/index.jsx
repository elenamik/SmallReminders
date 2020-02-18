import React, { useState } from 'react';
import CircleButton from '../CircleButton';
import './PrincipleEditor.scss';

function PrincipleEditor ({ handleClose, handleSaveNew, initialValue }) {
  const [input, setInput] = useState(initialValue);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    handleSaveNew({ content: input });
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
          required={true}
          value={input}
        />
        <label className='principle-editor-label' for='principle'>
          <span className='principle-editor-label-text'>Wisdom Goes Here</span>
        </label>
      </form>
      <div className='principle-editor-buttons'>
        <CircleButton name='exit' icon={'\u2190'} onClick={handleClose} />
        <CircleButton name='submit' icon={'\u2713'} onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default PrincipleEditor;
