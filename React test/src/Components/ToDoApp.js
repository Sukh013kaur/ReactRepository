import React, { useState } from 'react';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [Value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddTask = () => {
    if (Value.trim() !== '') {
      setTasks([...tasks, Value]);
      setValue('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="form-container">
      <center><h1>To-Do List</h1>
      <hr></hr>
      <div className="form-group">
      <label for="disabledTextInput" class="form-label"><h2>Add Task</h2></label> &nbsp;
      <input
        type="text"
        value={Value}
        onChange={handleInputChange}
        placeholder="Add a new task"
      /></div>
      &nbsp;<button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            &nbsp; <button onClick={() => handleRemoveTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      </center>
    </div>
    </div>
  );
}

export default ToDoApp;
