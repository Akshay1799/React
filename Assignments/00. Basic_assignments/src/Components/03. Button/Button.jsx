import React from 'react'

const Button = ({ text, onClick, disabled }) => {
    return (
        <>
            <button style={{margin:15}} onClick={onClick} disabled={disabled}>
                {text}
            </button>
        </>
    )
}

export default Button