import React from 'react'

export default function Todo({ todo }) {
    
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div>
            <button className='complete'>Done</button>
            <button className='remove'>X</button>
        </div>
    </div>
  )
}

