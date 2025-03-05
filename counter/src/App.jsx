import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);
  
  // let counter = 5;

  const addValue = ()=>{
    try {
      if (counter >= 20) {
         alert("20 is the limit."); 
        return;
      }
      
    } catch (error) {
      console.log("Caught an error:");
    }
    setCounter(counter+1);

  }
  const decreaseValue = ()=>{
    try {
      if (counter <= 0) {
        throw alert("counter won't go in negative.");
        // return; // throw stop the execution of function immediately 
        // and return does the same thing that's why return is not reachable here
      }
      
    } catch (error) {
      console.log("Caught an error:");
      return;
    }
    setCounter(counter-1);
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
