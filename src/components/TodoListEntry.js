import React from 'react'

const TodoListEntry = (props) => {

  return(
    <div>
    <input type="checkbox" id = {props.listEntry} value = {props.listEntry}></input>
    <label id = {props.listEntry}>{props.listEntry}</label>
    <button onClick = {() => props.deleteTodoThing(props.listEntry)}>del</button>
    </div>
  )
}


export default TodoListEntry