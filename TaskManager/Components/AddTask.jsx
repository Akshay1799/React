import React from 'react'
import { useState } from 'react'

const AddTask = ({ addTask }) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim()) {
            addTask(input)
            setInput('');
        };

    }

    return (
        <>
            <div style={{ margin: 19 }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='add your task'
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <button style={{ marginLeft: 5 }} type='submit'>Add Task</button>
                </form>
            </div>
        </>
    )
}

export default AddTask