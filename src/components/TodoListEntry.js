import React from 'react'

const TodoListEntry = (props) => {

  return(
    <div>
    <input type="checkbox" id = {props.listEntry} value = {props.listEntry}></input>
    <label for = {props.listEntry}>{props.listEntry}</label>
    </div>
  )
}


export default TodoListEntry