import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Users = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {

    // Fetching data using fetch

    // const apiData = async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const data = await response.json()
    //   setUser(data);
    //   console.log(data);
    //   console.log(data.length);
    // }

    // Fetching data using axios

    const apiData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUser(response.data);
      console.log(response.data);
      console.log(response.data.length);
    }
    apiData();
  }, [])


  return (
    <>
    
      <div>
        <ul style={{display:'Grid', gridTemplateColumns:'350px 300px 350px'}}>
          {user.map((user)=>(
            <li key={user.id} style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',listStyle:'none', margin:5, padding:10, border:'0.5px solid grey', borderRadius:6}}>
              <h4>{user.name}</h4>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default Users