import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Here I have practiced on JSX, Components, and De-structuring //

function App() {
  
  const color1 = "blue";
  const fullYear = new Date().getFullYear()
  const name = "Akshay";
  const age = 25;
  return (
    <>
      <div>
        <h1>Hello, welcome to react!</h1>
        <p>My favourite color is {color1}</p>
        <h2>The current year is {fullYear}</h2>
        <h3 style={{color:'red', fontSize:"30px"}}>This is a jsx.</h3>
        <h4>My name is: {name} and I am {age} year old.</h4>
      </div> 
      <Greeting/>
      <UserInfo/>
      <CurrentDate/>
      <Button label = "Click Me"/> 
      <Card title="React" description=" framework of javaScript"/>
      <UserProfile name = "John" age="23"/>
      </>
  )
}

function Greeting(){

  return(
    <h1>Hello, React!</h1>
  )
}

function UserInfo(){
  const name = "Sunny";
  const age = 25;

  return(
    <div>
      User's name is {name} and age is {age};
    </div>
  )
}

function CurrentDate(){
  const date =  new Date().toDateString();

  return(
    <h4>Date is {date}</h4>
  )
}

function Button({label}){
  
  return <button>{label}</button>
}

function Card({title, description}){

  return(
    <>
    <div>
    This is a {title}, {description}
    </div>
    </>
  )
}

function UserProfile({name, age}){

  return(
    <h4>My name is {name} and I am {age} year old.</h4>
  )
}
export default App
