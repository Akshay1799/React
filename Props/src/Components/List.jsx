import React from 'react'

function List({ items }) {

    return (
        <>
            <p>My favourite fruits are: </p>
            <ul>
                {items.map((item, index) => {
                    // if you are using curly braces, you have to use return
                    // if you don't want to use curly braces, 
                    // then use parenthesis instead of curly braces, that's implicit return
                    return <li style={{ listStyle: 'none' }} key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default List