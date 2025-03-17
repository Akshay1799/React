import React from 'react'

const TaskItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <>
        <div style={{padding:15, marginBottom: '10px', border:'1px solid lightgrey'}}>

            <li style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent:'space-evenly',}} className={task.completed ? " completed " : ""}></li>
            <input type="checkbox" 
             style={{ marginRight: '15px', transform: 'scale(1.5)',width: '13px',height: '13px'}} 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            /><span style={{ fontSize:24 }}>{task.text}</span>
            <button style={{ marginLeft: 10,fontSize:10, backgroundColor:'transparent', border:'1px solid lightgrey', borderRadius:6, padding:4}} onClick={() => deleteTask(task.id)}>❌</button>
        </div>
        </>
    )
}

export default TaskItem