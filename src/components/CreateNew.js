import React from 'react';

const CreateNew = (props) => {

  return (
    <ul>
      <div className = 'asideTitle'>Create New TODO LIST</div>
        <button className = 'button1' onClick={props.init}>create</button>
    </ul>
  )
}

export default CreateNew;