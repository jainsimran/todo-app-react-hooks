import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState('');

  let onSubmit = () => {
    let tempList = [...todoList, {userInput, done: false}]; // copying todoList by value using spread operator
    setTodoList(tempList);
    setUserInput('');
  };

  let deleteItem = index => {
    let tempList = [...todoList]
    tempList.splice(index, 1);
    setTodoList(tempList);
  };

  let completeItem = index => {
    let tempArray = [...todoList];
    tempArray[index].done = !tempArray[index].done;
    setTodoList(tempArray);
  };



  return (
    <div>
        <label>
        Add task 
          <input type="text" name='userInput' onChange={(event) => setUserInput(event.target.value)} value={userInput} />
        </label>
      <button type="submit" onClick={onSubmit}> Submit </button>

      {todoList.length > 0 ? <h1>TODO LIST</h1> : null}

      <ol>
        {todoList.map((todoItem, index) =>
          <div key={index} id='task' className={todoList[index].done ? 'lineThrough' : null}>
            <li>{todoItem.userInput}</li>
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => completeItem(index)}> {todoList[index].done ? 'Undone' : 'Done'} </button>
          </div>
        )} 
      </ol>
      
    </div>
  )
}
