import React from 'react'

const Comment = ({author, text, children}) => {
  return (
    <div>
        <div>
        <p><strong>{author }:</strong> {text}</p>
        </div>
        <div style={{marginLeft:40}}>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Comment