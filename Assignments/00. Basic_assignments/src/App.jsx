// import { useState } from 'react'
import './App.css'
import Avatar from './Components/01. Avatar/Avatar'
import ProductCard from './Components/02. ProductCard/ProductCard'
function App() {
  
  const Product = {
    name:'Iphone',
    price: 90000,
    description:'A new generation hit-tech smart Iphone with integrated AI'
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
      <ProductCard {...Product}/>
    </>
  )
}

export default App
