import { useState } from 'react'
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isComplete: false
      }
    ];
    console.log(newTodos)
    setTodos(newTodos);
  }
  
  function removeTodo (id) {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
    console.log(filteredTodos)
  }

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <TodoForm addTodo={addTodo}/>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  )
}
