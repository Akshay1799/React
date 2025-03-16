import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './Components/Toggle'
import Greeting from './Components/Greeting'
import TaskList from './Components/TaskList'
import FilterNumber from './Components/FilterNumber'
import TaskManager from './Components/TaskManager'

function App() {
  

  return (
      <>
       <Toggle/>
      <Greeting/>
      {/* <TaskList/> */}
      {/* <FilterNumber/> */}
      <TaskManager/>
      </>
  )
}

export default App
