import React from 'react'

const FruitList = () => {

    const fruits = ['Apple', 'Pineapple', 'Cherry', 'Strawberry'];

    const fruitList = fruits.map((item, index)=>(
        <li key={index}>{item}</li>
    ))
  return (
    <>
    <h4>Fruit List</h4>
    <ul>
        {fruitList}
    </ul>
    </>
  )
}

export default FruitList