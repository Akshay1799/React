//App.jsx

import { useState } from 'react';
import ThemeContext from './Contexts/ThemeContext';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Button from './Components/Button';
import './App.css'

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <div className={theme}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <Navbar/>
          <Card/>
          <Button/>
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App
