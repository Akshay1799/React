import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form'

const ReactForm = () => {
    const {
        register, 
        handleSubmit,
         watch, 
         formState:{errors}
    } = useForm();

    const [tableData, setTableData] = useState([]);

    const onSubmit = (data)=>{
        setTableData((prev) => [...prev, data])
        console.log(data)
    };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
            <label>Firstname </label>
            <input {...register("firstname",{required:true, maxLength:{value:6, message:'name should contain max 6 letters'}, minLength: {value:4, message:'name should contain min 4 letters'}})}/>
            {errors.firstname && <p style={{fontSize:12}}>{errors.firstname.message}</p>}
            <br />
           

            <label>Lastname </label>
            <input {...register("lastname",{required:true,minLength: {value:5, message:'lastname should contain min 5 letters'}})}/>
            {errors.lastname && <p style={{fontSize:12}}>{errors.lastname.message}</p>}
            <br />
            

            <label>Age </label>
            <input {...register("age",{required:true, min:{value:18, message:'minimum age must be 18'}})}/>
            {errors.age && <p style={{fontSize:12}}>{errors.age.message}</p>}
            <br />    
               
            <input type="submit" />
    </form>

    {tableData.length > 0 && (
        <table border={1} cellPadding={15} style={{marginTop:20}}>
            <thead>
                <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index)=>(
                    <tr key={index}>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
    </>
  )
}

export default ReactForm