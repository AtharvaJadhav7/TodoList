import React from 'react'
import { TodoItem } from './TodoItem'
export const Todos = ({ todoList, onDelete }) => {
  let myStyle = {
    minHeight: "57.3vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=''>Todos List</h3>

      {todoList.length === 0 ? (<p className='my-3'>No Todos to display</p>) : (todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
      }))}
    </div>
  )
}
