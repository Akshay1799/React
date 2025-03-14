import React from 'react'

function BookList({ book }) {
    return (
        <>
            <div>
                <p>I have these books:</p>
                <ul>
                    {book.map((item, index) => (
                        <li style={{listStyle:'none'}} key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BookList