import React from 'react'

const TaskList = () => {
    const tasks = ["Buy groceries", "Do laundry", "Study React"];
    return (
        <>
            <div>
                <h3>Today's tasks are:</h3>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </div>
        </>
    )
}

export default TaskList