import React, { useState } from 'react'

const Toggle = () => {
    const [login, setLogin] = useState(true);

    const toggleHandler = () => {

        setLogin(!login);

    }

    return (
        <>
            <h4>Change the login status</h4>
            <h4>
                {login ? <p>user is logged in</p> : <p>user is not logged in</p>}</h4>
            <button onClick={toggleHandler}>
                {login ? <p>log out</p> : <p>login</p>}
            </button>
        </>
    )
}
export default Toggle


