import React, { useState, useEffect } from 'react'
import './App.css'
// import userContext from './context/userContext'
import Navbar from './Components/Navbar'
import themeContext from './context/themeContext'
import authContext from './context/authContext'
import Profile from './Components/Profile'

function App() {
  // const [user] = useState({name: 'Akshay'})

  // const [theme, setTheme] = useState('light')

  const [user, setUser] = useState(null)

  // const toggleTheme = () => setTheme(prev => prev === 'light' ? 'Dark' : 'light')

  // useEffect(() => {
  //       document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#121212',
  //       document.body.style.color = theme === 'light' ? '#000000' : '#ffffff',
  //       document.body.style.transition = '0.3s ease-in-out' // smooth transition
  //       }, [theme]);

  const login = () => {
    setUser({
      name: 'Akshay',
      email: 'akshay@Ms.com'
    });
  }

  const logout = () => {
    setUser(null)
  }
  return (
    <>
      {/* for user */}
      {/* <userContext.Provider value={user}>
        <Navbar/>
      </userContext.Provider>  */}

      {/* for theme */}
      {/* <themeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{padding:'2rem'}}>
          <Navbar />
        </div>
      </themeContext.Provider > */}

      <authContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Profile />
      </authContext.Provider>


    </>
  )
}

export default App
