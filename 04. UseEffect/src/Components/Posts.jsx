import React,{useState, useEffect} from 'react'


const Posts = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
      
        const postData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setPost(data)
            console.log(data);
            
        }
    
     postData();
    }, [])
    
  return (
    <>
    <div>
        <ul style={{display:'grid', gridTemplateColumns:'300px 300px 300px'}}>
            {post.map((posts)=>(
                <li key={posts.id} style={{border:'1px solid grey', borderRadius:6, listStyle:'none', margin:8, padding:10}}>
                    <h4>{posts.title}</h4>
                    <p>{posts.body}</p>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Posts