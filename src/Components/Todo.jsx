import React from 'react'

export default function Todo({ todo, removeTodo, completeTodo }) {
    
  return (
    <div className="todo">
        <div className="content">
            <p className="category">{todo.category}:</p>
            <p style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                {todo.text}
            </p>
        </div>
        <div className="side-buttons">
            <button 
                className="complete"
                onClick={() => completeTodo(todo.id)}>
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
