import React from 'react'
import TodoListEntry from './TodoListEntry'

const TodoList = (props) => {
  //console.log(props.currentState);

  return (
    <ul>
      <div className='todoList'>
        <h4>List</h4>
        {props.currentState.todoList.map(entry =>
          <TodoListEntry 
          key={entry.toString()} 
          listEntry={entry} 
          deleteTodoThing = {props.deleteTodoThing}
          />
        )}
      </div>
    </ul>
  )
}


export default TodoList