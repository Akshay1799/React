import React, { useState } from 'react'

const Multi_Input_Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        contact: ''
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert('Your form has been submitted!');
        setFormData(
            {
                name: '',
                email: '',
                password: '',
                age: '',
                contact: ''
            }
        );
    }

    return (
        <>
            <div className='container'>
                <h4>Fill the form</h4>
                <form className='form' onSubmit={submitHandler}>
                    <input style={{ margin: 5, padding: 5, fontSize: 22 }} value={formData.name} name='name' onChange={onChangeHandler} type="text" placeholder='Enter you name' /><br />
                    <input style={{ margin: 5, padding: 5, fontSize: 22 }} value={formData.email} name='email' onChange={onChangeHandler} type="email" placeholder='Enter your valid email' /><br />
                    <input style={{ margin: 5, padding: 5, fontSize: 22 }} value={formData.password} name='password' onChange={onChangeHandler} type="password" placeholder='Set your password' /><br />
                    <input style={{ margin: 5, padding: 5, fontSize: 22 }} value={formData.age} name='age' onChange={onChangeHandler} type="age" placeholder='Enter your age' /><br />
                    <input style={{ margin: 5, padding: 5, fontSize: 22 }} value={formData.contact} name='contact' onChange={onChangeHandler} type="contact" placeholder='Enter your phone number' /><br />
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </>
    )
}

export default Multi_Input_Form