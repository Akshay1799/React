import React from 'react'

const BusinessCard = () => {
    const card = {
        ProfilePic: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        Name: 'Peter alex',
        Email: 'alexP@gmail.com'
    }
  return (
    <div style={{backgroundColor:'whitesmoke', padding:20, color:'black', borderRadius:6}} className='Bizz-card' >
        <img src={card.ProfilePic} alt="user" width={150} style={{borderRadius:'50%'}} />
        <h4 style={{margin:3}}>{card.Name}</h4>
        <p style={{margin:3}}>{card.Email}</p>
    </div>
  )
}

export default BusinessCard