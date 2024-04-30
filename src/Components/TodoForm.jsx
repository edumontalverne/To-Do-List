import { useState } from 'react';

export default function TodoForm({ addTodo }) {

    const [ title, setTitle] = useState("");
    const [ category, setCategory ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!title || !category) return;
        console.log(title, category)
        addTodo(title, category)
        setTitle("")
        setCategory("")
    }

  return (
    <div>
        <h3></h3>
        <form onSubmit={handleSubmit}>
            <input 
                value={title}
                type="text" 
                placeholder="Type a task"
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Select a category">Select a category</option>
                <option value="Personal">Personal</option>
                <option value="Education">Education</option>
                <option value="Work">Work</option>
            </select>
            <button type="submit">+ Add to list</button>
        </form>
    </div>
  )
}
