import React from 'react'
import TodoListEntry from './TodoListEntry'
import './TodoList.css'

const TodoList = (props) => {
  //console.log(props.currentState);

  return (
    <div>
      <main className='todoList'>
        <div className = 'title'>List</div>
        <div className = 'todos-wrapper'>
        {props.currentState.todoList.map(entry =>
          <TodoListEntry 
          key={entry.toString()} 
          listEntry={entry}
          //ID
          listEntryId = {props.currentState.ID}
          deleteTodoThing = {props.deleteTodoThing}
          />
        )}
        </div>
      </main>
    </div>
  )
}


export default TodoList