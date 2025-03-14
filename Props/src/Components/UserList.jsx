import React from 'react'

function UserList({ user }) {
    return (
        <>
            <div>
                <p>Users are:</p>
                <ul>
                    {user.map((item, index) => (
                        <li style={{ listStyle: 'none' }} key={index}>{item.name} is {item.age} years old</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UserList