import React from 'react'
import ProfileCard from './ProfileCard'

function Image({ imageUrl, altText, name, age, city }) {
  return (
    <>
      <div style={{borderRadius: 10, width: 300, color: 'black', backgroundColor: 'white', fontWeight: 700, margin: '40px' }}>
      <img src={imageUrl} alt={altText} style={{borderRadius:10}}/>
        <h4>Bike's owner profile</h4>
        <text>Name: {name}</text>
        <br />
        <text>Age: {age}</text>
        <br />
        <text>City: {city}</text>
      </div>
    </>
  )
}

export default Image