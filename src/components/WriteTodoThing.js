import React from 'react'
import './WriteTodoThing.css'

const WriteTodoThing = (props) => {

  let value = '';
  function changeHandler(e){
    value = e.target.value;
  }

  function clickHandler(){
    props.addTodoThing(value);
  }

  return(
    <div className = 'form'>
    <input className = 'inputTodoThing' type = 'text' onChange = {changeHandler}></input>
    <button className = 'button1' onClick = {clickHandler}>add</button>
    </div>
  )
}

export default WriteTodoThing