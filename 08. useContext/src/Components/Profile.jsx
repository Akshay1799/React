import React, { useContext } from 'react'
import authContext from '../context/authContext'


const Profile = () => {
    const {user} = useContext(authContext);

    if(!user) return null;

  return (
    <>
        <div>
        <h2>User Details:</h2>
        <p>{user.name}</p>
        <p>{user.email}</p>
        </div>
    </>
  )
}

export default Profile