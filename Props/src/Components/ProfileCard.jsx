import React from 'react'

function ProfileCard({name, age, city}) {
  return (
    <>
    <div style={{width:300, color:'black', backgroundColor: 'turquoise', fontWeight: 700, margin:'auto'}}>
        The owner of this bike is {name}, his age is {age}, and he lives in {city}
    </div>
    </>
  )
}

export default ProfileCard