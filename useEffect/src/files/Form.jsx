import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        alert("Your form has been submitted");

        setName('');
        setEmail('');
        setPassword('');
    }

  return (
    <>
    <div>
        <form style={{display:'block'}} onSubmit={submitHandler}>
            <input style={{margin:5}} onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='enter your name' /><br />
            <input style={{margin:5}} onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='enter your email' /><br />
            <input style={{margin:5}} onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='enter your password' />
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Form