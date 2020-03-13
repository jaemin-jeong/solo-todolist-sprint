import React from 'react'

const TodoListEntry = (props) => {

  return(
    <div>
    <input type="checkbox" id = {props.listEntry} value = {props.listEntry}></input>
    <label id = {props.listEntry}>{props.listEntry}</label>
    <button className = 'button1' onClick = {() => props.deleteTodoThing(props.listEntry, props.listEntryId)}>del</button>
    </div>
  )
}


export default TodoListEntry