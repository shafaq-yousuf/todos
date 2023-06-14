import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  let add = () => {
    task.push(text);
    setTask([...task]);
    setText("")
  }

  let delAll = () => {
    setTask([]);
  }

  let edit = (i) => {
    let newTask = prompt("Enter New Task", task[i]);
    task[i] = newTask;
    setTask([...task])
  }

  let del = (i) => {
    task.splice(i,1)
    setTask([...task])
  }

  return (
    <div className='body'>
      <h1>ENTER TASK</h1>
      <input placeholder='Enter task here' onChange={(e) => setText(e.target.value)} value={text} name="text" className='inp' /> <br />
      <button className='btn' onClick={add}>Add</button>
      <button className='btn' onClick={delAll}>Delete All</button>
      {task.map((x, i) => {
        return <div key={i}><li>
          {x}
          <button className='btn2' onClick={() => edit(i)}>Edit</button>
          <button className='btn2' onClick={() => del(i)}>Del</button></li></div>
      })}
    </div>
  );
}

export default App;
