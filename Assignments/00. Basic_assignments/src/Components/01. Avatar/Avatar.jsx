import React from 'react'

const Avatar = ({ imageUrl, alt, size, name, age }) => {
  return (
    <div>
      <div style={{width:250, height:300,backgroundColor:'beige', borderRadius:12,margin:'10px auto' }}>
        <img
          src={imageUrl}
          alt={alt}
          style={{ height: size, width: size, marginTop:10 }}
          />
        <h4>Name: {name}</h4>
          <p>Age: {age}</p>

      </div>
    </div>
  )
}

export default Avatar