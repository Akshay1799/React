import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = ()=>{
    if(counter >= 20) {
      console.log('20 is the limit.');
      return
    }
    // counter += 1;
    // console.log('clicked ', counter);
    setCounter(counter + 1);
  }

  const decreaseValue = ()=>{
    // counter -= 1;
    if (counter <= 0) {
      console.log("won't go in negative.");
      return;
    } 
    
    setCounter(counter -1 );
  }


  return (
    <>
      <h1>Hello there!👋</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick = {addValue} >Increase value {counter}</button>
      <br />
      <button onClick = {decreaseValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
