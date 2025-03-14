import React from 'react'

function Blog({title, author, content}) {
  return (
    <>
    <p>Title: {title}</p>
    <p>Author: {author}</p>
    <p>Content: {content}</p>
    </>
  )
}

export default Blog