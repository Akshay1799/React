import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/index.css'
import AddTask from '../Components/AddTask'
import DarkMode from '../Components/DarkMode'
import FilterTask from '../Components/FilterTask'
import SearchTask from '../Components/SearchTask'
import TaskItem from '../Components/TaskItem'
import TaskList from '../Components/TaskList'

function App() {

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  }
  )

  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const filteredTask = tasks.filter(task => {
    if (filter === 'completed' && !task.completed) {
      return false;
    }
    if (filter === 'pending' && task.completed) {
      return false;
    }
    return task.text.toLowerCase().includes(search.toLowerCase())
  })

  
  return (
    <>
      <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh'
    }}>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          
          <h2>Task Manager</h2>

          <div style={{display:'inline-block', margin:19}}>
            <DarkMode />
          </div>

        </nav>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <h4>Search your tasks</h4>
          <SearchTask setSearch={setSearch} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <h4>Categories: </h4>
          <FilterTask setFilter={setFilter} />
        </div>

        <div style={{ display: 'flex', flexDirection:'column', alignItems:'center' ,justifyContent: 'center'}}>
          <AddTask addTask={addTask} />
          <TaskList tasks={filteredTask} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
      </div>
    </>
  )
}

export default App
