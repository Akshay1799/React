import React from 'react'
import { useState, useEffect } from 'react'

const FetchApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://dummyjson.com/users');
      const users = await data.json();
      setApiData(users.users);
      console.log(users.users);


    }
    api();
  }, [])

  return (
    <>
      <div>
        {
          apiData.length === 0 ? (
            <h3>Loading...</h3>
          ) : (
            apiData.map((data) => (
              <div key={data.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
                <h3>Name: {data.username}</h3>
                <h5>Age: {data.age}</h5>
                <h5>Gender: {data.gender}</h5>
                <p>{data.address?.address}, {data.address?.city}</p>
              </div>
            )))}
      </div>
    </>
  )
}

export default FetchApi