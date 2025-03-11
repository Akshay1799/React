import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [timeZone, setTimeZone] = useState("UTC");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setDate(now.toLocaleDateString("en-us",{timeZone}))
      setTime(now.toLocaleTimeString("en-us",{timeZone}));
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
    }
  }, [timeZone])
  
  function handleTimeZone(event){
    setTimeZone(event.target.value);
  }

  return (
    <>
      <h2>Select your time zone</h2>
      <select onChange={handleTimeZone} style={{padding:5}}>
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Asia/Kolkata">India (IST)</option>
      </select>
      <h2>Today the date is: {date}</h2>
      <h2>Current Time is: {time}</h2>
    </>
  )
}

export default App
