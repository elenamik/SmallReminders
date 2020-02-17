import React from 'react';
import './PrincipleEditor.scss';
function PrincipleEditor () {
  const onSubmit = (data) => {
    console.log('submitted');
  };
  return (
    <div className='principle-editor-container'>
      <form id='principle-editor'>
        <input className='principle-input' />
        <label className='principle-editor-label'>
          <span className='principle-editor-label'>Wisdom Goes Here</span>
        </label>
      </form>
    </div>
  );
}

export default PrincipleEditor;
