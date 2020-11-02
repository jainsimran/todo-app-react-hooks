import React, { useState } from 'react';

export default function App() {

  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState('');

  let onSubmit = () => {
    todoList.push(userInput);
    setTodoList(todoList);
    setUserInput('');
  };

  let deleteItem = index => {
    let tempList = [...todoList]
    tempList.splice(index, 1);
    setTodoList(tempList);
  };



  return (
    <div>
        <label>
        Add item
          <input type="text" name='userInput' onChange={(event) => setUserInput(event.target.value)} value={userInput} />
        </label>
      <button type="submit" onClick={onSubmit}> Submit </button>

      {todoList.length > 0 ? <h1>TODO LIST</h1> : null}

      <div>
        {todoList.map((todoItem, index) =>
          <div key={index}>
            <li>{todoItem}</li>
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button>Done</button>
          </div>
        )} 
      </div>
      
    </div>
  )
}
