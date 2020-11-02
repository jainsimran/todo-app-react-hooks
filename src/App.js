import React, { useState } from 'react';
// import TodoList from './TodoList';

export default function App() {

  const [list, addItem] = useState([]);
  const [item, setInput] = useState();

  let onSubmit = event => {
    event.preventDefault();
    list.push(item);
    console.log(list);
    setInput('');
  }

  return (
 
    <div>
      <form>
        <label>
          Add item
          <input type="text" name='item' onChange={(event) => setInput(event.target.value)} value={item} />
        </label>
        <button type="submit" onClick={onSubmit}> Submit </button>
      </form>
      {list.length > 0 ? <h1>TODO LIST</h1> : null}
      {list.map((items) => <li>{items}</li>)}


      {/* <TodoList todoList={list} /> */}
    </div>
  )
}
