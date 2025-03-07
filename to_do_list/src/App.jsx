import { useState } from 'react';
import './App.css';
import SearchIcon from "./assets/search.svg";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task, description) => {
    const newTask = { task, description };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };


  const filteredTasks = tasks.filter(task =>{
    task.task.toLowerCase().includes(searchTerm.toLowerCase()) || 
    task.description.toLowerCase().includes(searchTerm.toLowerCase())} 
 
  );

  return (
    <>
      <div className="wrapper">
        <nav>
          <h1 className="header">To-Do List</h1>
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Tasks"
            />
            <img
              src={SearchIcon}
              alt="search"
            />
          </div>
        </nav>

        <div className="add-task">
          <input type="text" className="task_name" placeholder="Input Task to Complete" id="taskName" />
          <input type="text" className="task_description" placeholder="Give details..." id="taskDescription" />
          <button onClick={() => addTask(
            document.getElementById('taskName').value,
            document.getElementById('taskDescription').value
          )}>Add Task</button>
        </div>

        <div className="task-list">
          <div className="tasks">
            {filteredTasks.map((task, index) => (
              <div key={index} className="a-task">
                <h1 className="all-tasks">{task.task} <input type="checkbox" className="check" onChange={() => console.log('Checked')} /></h1>
                <hr />
                <h2 className="tick">{task.description}</h2>
                <button onClick={() => removeTask(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
