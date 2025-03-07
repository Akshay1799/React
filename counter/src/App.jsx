import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counterVisible, setCounterVisible] = useState(true)

  //for conditional rendoring
  useEffect(() => {

    const intervalId = setInterval(() => {
      setCounterVisible(count => !count)
    }, 5000);

    return function() {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div>
      hi
      {counterVisible && <Counter></Counter>}
      hello
    </div>
  )
}

// To increase the counter automatically
function Counter() {
  let [counter, setCounter] = useState(0);

  useEffect(function () {
    console.log("on mount");

    const intervalId = setInterval(function () {
      console.log("from inside interval");
      setCounter(count => count + 1);

    }, 1000)

    return function() {
      console.log("on unmount");
      clearInterval(intervalId);
    }
  }, []);


  return (
    <>
      <h1>Hello there!👋</h1>
      <h2>Counter value: {counter}</h2>
    </>
  )
}


export default App
