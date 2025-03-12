import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTime = () => {
    if (!isRunning) {
      setIsRunning(true);

      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIntervalId(id);
    }
  }

  const stopTime = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  }

  const resetTime = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTime(0);
  }

  useEffect(() => {
    return () => clearInterval(intervalId); 
  }, []);

  const formatTime = (time)=>{
    const minutes = Math.floor(time/60000);
    const seconds = Math.floor((time%60000)/1000);
    const milliseconds = Math.floor((time%1000)/10);

    return `${minutes.toString().padStart(2,"0")} 
    : ${seconds.toString().padStart(2,"0")}
    : ${milliseconds.toString().padStart(2,"0")}`
  }

  return (
    <>
      <h1>Start Your Timer</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startTime}>Start timer</button>
      <button onClick={stopTime}>Stop timer</button>
      <button onClick={resetTime}>Reset timer</button>
    </>
  )
}

export default App
