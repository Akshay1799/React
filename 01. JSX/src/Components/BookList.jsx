import React from 'react'

const BookList = () => {

    const books = [
        {
            Image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyc3xlbnwwfHwwfHx8MA%3D%3D',
            Title:'The Psychology of money',
            Author:'Morgan Housel',
            Genre:'Self-help'
        },
        {
            Image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyc3xlbnwwfHwwfHx8MA%3D%3Dlash.com/photo-1592496431122-2349e0fbc666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyc3xlbnwwfHwwfHx8MA%3D%3D',
            Title:'How Innovation Works',
            Author:'Matt Ridley',
            Genre:'History'
        },
        {
            Image: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3Dcom/photo-1592496431122-2349e0fbc666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyc3xlbnwwfHwwfHx8MA%3D%3D',
            Title:'Narnia',
            Author:'C.S.Lewis',
            Genre:'Fiction'
        },
        {
            Image: 'https://images.unsplash.com/photo-1716892001555-c05f13f4362a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxib29rJTIwY292ZXJzfGVufDB8fDB8fHwwsh.com/photo-1592496431122-2349e0fbc666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyc3xlbnwwfHwwfHx8MA%3D%3D',
            Title:'Being the red flag',
            Author:'Amol Srivastava',
            Genre:'Poetic'
        },
    ]

    const bookList = books.map((item, index)=>(
        <li className='book-list' key={index}>
            <img src={item.Image} alt="Cover Image" width={150}/>
            <h4>{item.Title}</h4>
            <p>{item.Author}</p>
            <p>{item.Genre}</p>
        </li>
    ))
  return (
    <div>
        <h3>Book Recommend List</h3>
        <ul className='book-card'>{bookList}</ul>
    </div>
  )
}

export default BookList