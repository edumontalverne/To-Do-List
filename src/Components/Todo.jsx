import React from 'react'

export default function Todo({ todo, removeTodo }) {
    
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div className="side-buttons">
            <button className="complete">
                Done
            </button>
            <button 
                className="remove" 
                onClick={() => removeTodo(todo.id)}>
                x
            </button>
        </div>
    </div>
  )
}

