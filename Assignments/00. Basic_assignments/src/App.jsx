// import { useState } from 'react'
import './App.css'
import Avatar from './Components/01. Avatar/Avatar'
// import assets from './assets' 
function App() {
  

  return (
    <>
      <Avatar
      imageUrl='https://i.imgur.com/1bX5QH6.jpg'
      alt="Lin Lanying"
      size = {200}
      name = "Lin Lanying"
      age={67}
      />
    </>
  )
}

export default App
