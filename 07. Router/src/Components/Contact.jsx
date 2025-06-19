import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
            navigate('/about');
    }
    return (
        <>
            <button onClick={handleClick}>click me move to about page</button>

            <div>Welcome to Contact Page</div>
            <Outlet/>
            <div style={{width:400, backgroundColor:'wheat', color:'black'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, autem, cum, sunt sequi esse quidem vitae officia omnis illo distinctio porro!
                    Quisquam hic repellat, cum enim neque rerum, soluta beatae omnis, ipsum dolorum dignissimos voluptatum.
                    Explicabo quam a saepe odit!
                </p>
            </div>
        </>
    )
}

export default Contact