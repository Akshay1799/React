import React, { useState } from 'react'

const TaskManager = () => {
    const [tasks, setTasks] = useState(['learn react', 'practice react', 'make projects']);

    function deleteTask(taskToDelete) {
        setTasks(tasks.filter((task) => task !== taskToDelete))
    }

    return (
        <>
            <div>
                {tasks.map((task, index) => (
                    <li key={index}>{task}
                        <button onClick={()=>deleteTask(task)} style={{marginLeft:40}}>❌ Delete Task</button>
            </li>
        ))}
        </div >
    </>
  )
}

export default TaskManager