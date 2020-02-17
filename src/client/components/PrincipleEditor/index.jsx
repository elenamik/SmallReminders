import React from 'react';
import './PrincipleEditor.scss';

function PrincipleEditor () {
  const onSubmit = (data) => {
    console.log('submitted');
  };
  return (
    <div className='principle-editor-container'>
      <div className='hide-line'>
        <form id='principle-editor-form'>
          <textarea className='principle-input' name='principle' type='text' wrap='soft' autoComplete='off' required='true' />
          <label className='principle-editor-label' for='principle'>
            <span className='principle-editor-label-text'>Wisdom Goes Here</span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default PrincipleEditor;
