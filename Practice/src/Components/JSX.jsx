import React from 'react'
import image from '../assets/img.jpg'

const JSX = () => {
  return (
    <div style={{backgroundColor:'whitesmoke', width:300, borderRadius:7}}>
        <h2 style={{fontFamily:'Roboto', fontSize:16, color: 'tomato', padding:8, margin:2}}>Profile Card</h2>
        <img style={{ width:'50%', borderRadius:10}} src={image} alt="an image of a user" />
        <section style={{margin:2, padding:5}}>
        <h5 style={{color:'slateblue', margin:2}}>Name: Michael</h5>
        <p style={{color:'black', margin:5}}>Email: Michealphelps@gmail.com</p>
        <p style={{color:'black', margin:5}}>Profession: Instructor</p>
        </section>
    
    </div>
  )
}

export default JSX