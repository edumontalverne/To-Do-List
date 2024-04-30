import { useState } from 'react'
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';
import Search from './Components/Search';
import './App.css'

export default function App() {
  const [ todos, setTodos ] = useState([]);
  const [ search, setSearch] = useState("")

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
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

  function completeTodo(id) {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <TodoForm addTodo={addTodo}/>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos
          .filter((todo) => 
            todo.text.toLowerCase().includes(search.toLowerCase()))
          .map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo} 
              completeTodo={completeTodo} />
            )
          )
        }
      </div>
    </div>
  )
}
