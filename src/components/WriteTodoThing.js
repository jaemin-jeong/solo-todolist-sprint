import React from 'react'

const WriteTodoThing = (props) => {

  let value = '';
  function changeHandler(e){
    value = e.target.value;
  }

  function clickHandler(){
    props.addTodoThing(value);
  }

  return(
    <ul>
    <h4>Add todo Thing</h4>
    <input className = 'inputTodoThing' type = 'text' onChange = {changeHandler}></input>
    <button className = 'button1' onClick = {clickHandler}>add</button>
    </ul>
  )
}

export default WriteTodoThing