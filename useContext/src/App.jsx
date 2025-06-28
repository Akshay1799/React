import React, { useState } from 'react'
import './App.css'
import userContext from './context/userContext'
import Navbar from './Components/Navbar'

function App() {
  const [user] = useState({name: 'Akshay'})

  return (
    <>
      <userContext.Provider value={user}>
        <Navbar/>
      </userContext.Provider>
    </>
  )
}

export default App
