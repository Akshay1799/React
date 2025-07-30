// import { useState } from 'react'
import './App.css'
import Avatar from './Components/01. Avatar/Avatar'
import ProductCard from './Components/02. ProductCard/ProductCard'
import Button from './Components/03. Button/Button'
import Comment from './Components/04. Comment/Comment'

function App() {

  const Product = {
    name: 'Iphone',
    price: 90000,
    description: 'A new generation hit-tech smart Iphone with integrated AI'
  }

  function handleLoginClick() {
    alert('Login button clicked');
  }
  function handleSignupClick() {
    console.log('User is signing...');

  }
  function handleLogouOnClick() {
    alert('You can not logout right now');
  }

  return (
    <>
      {/* <Avatar
      imageUrl='https://i.imgur.com/1bX5QH6.jpg'
      alt="Lin Lanying"
      size = {200}
      name = "Lin Lanying"
      age={67} */}
      {/* /> */}
      {/* <ProductCard {...Product}/> */}

      <Button
        text="LogIn"
        onClick={handleLoginClick}
        disabled={false}
      />
      <Button
        text="SignUp"
        onClick={handleSignupClick}
        disabled={false}
      />
      <Button
        text="LogOut"
        onClick={handleLogouOnClick}
        disabled={false}
      />
      <div>
        <Comment author='Akshay' text="It's amazing!">
          <Comment author="Ashwin" text="I agree" />
          <Comment author="Neeraj" text="I don't agree" />
        </Comment>
      </div >
    </>
  )
}

export default App
