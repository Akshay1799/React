import React, { useState } from 'react'
import '../src/index.css'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle("dark-mode");
    }
    return (
        <>
            <button style={{padding:8}} onClick={handleDarkMode}>Toggle theme</button>
        </>
    )
}

export default DarkMode