import { useState } from 'react';

export default function TodoForm() {

    const [ title, setTitle] = useState("");
    const [ category, setCategory ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!title || !category) return;
        console.log(title, category)
        setTitle("")
        setCategory("")
    }

  return (
    <div>
        <h3>CREATE A TASK</h3>
        <form onSubmit={handleSubmit}>
            <input 
                value={title}
                type="text" 
                placeholder='Type a title'
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Select a category">Select a category</option>
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
            <button type='submit'>Create new</button>
        </form>
    </div>
  )
}
