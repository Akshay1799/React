import React from 'react'
import { useState } from 'react'

const Multi_input_handling = () => {
    const [formdata, setFormdata] = useState({
        name:'',
        email:'',
        age:'',
        password:'',
        phone:''
    })

    const onChangeHandler = (e)=>{
        const {name, value} = e.target
        setFormdata({...formdata, [name]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        alert('Your form has been submitted successfully!')
        console.log(formdata);
        

        setFormdata({
            name:'',
            email:'',
            age:'',
            password:'',
            phone:''
        })
    }

  return (
    <>
    <form onSubmit={submitHandler}>
        <input style={{margin:5}} onChange={onChangeHandler} type="text" name='name' value={formdata.name} placeholder='enter your name' /><br />
        <input style={{margin:5}} onChange={onChangeHandler} type="email" name='email' value={formdata.email} placeholder='enter your email ' /><br />
        <input style={{margin:5}} onChange={onChangeHandler} type="number" name='age' value={formdata.age} placeholder='enter your age' /><br />
        <input style={{margin:5}} onChange={onChangeHandler} type="password" name='password' value={formdata.password} placeholder='enter your password ' /><br />
        <input style={{margin:5}} onChange={onChangeHandler} type="number" name='phone' value={formdata.phone} placeholder='enter your phone ' /><br />
        <button style={{margin:5}}>Submit</button>
    </form>
    </>
  )
}

export default Multi_input_handling