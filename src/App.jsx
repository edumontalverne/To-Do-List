import { useState } from 'react'
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Practice ReactJS",
      category: "Study",
      isComplete: false
    },
    {
      id: 2,
      text: "Go to the gym",
      category: "Health care",
      isComplete: true
    },
    {
      id: 3,
      text: "English classes",
      category: "Study",
      isComplete: false
    }
  ]);
  
  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  )
}
