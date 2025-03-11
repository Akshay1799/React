import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [theme, setTheme] = useState(false);

  function toggleTheme(){
    setTheme(!theme);
  }

  useEffect(()=>{
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      
    }
  }, [theme])
  


  return (
    <>
      <button onClick={toggleTheme}>Switch to 
        {theme?" Light mode":" Dark mode"}
      </button>
    </>
  )
}

export default App
