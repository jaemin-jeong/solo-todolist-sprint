import React from 'react';

const CreateNew = (props) => {


  return (
    <ul>
      <h4>Create New TODO LIST</h4>
        <button onClick={props.init}>create</button>
    </ul>
  )
}

export default CreateNew;