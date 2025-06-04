import React,{useState}from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        alert('Your form has been submitted!');
        setName('');
        setEmail('');
        setPassword('');
    }
    
  return (
    <>
    <div>
    <form onSubmit={submitHandler}>
        Name: <input style={{margin:5, padding:5}} type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br />
        Email: <input style={{margin:5, padding:5}} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
        Password: <input style={{margin:5, padding:5}} type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <button type='submit'>Submit</button>
    </form>

    </div>
    </>
  )
}

export default Form