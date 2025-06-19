import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
            navigate('/');
    }
    return (
        <>
            <button onClick={handleClick}>click me move to home page</button>

            <div>Welcome to About Page</div>
            <div style={{width:400, backgroundColor:'pink', color:'black'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, autem, cum, sunt sequi esse quidem vitae officia omnis illo distinctio porro!
                    Quisquam hic repellat, cum enim neque rerum, soluta beatae omnis, ipsum dolorum dignissimos voluptatum.
                    Explicabo quam a saepe odit!
                </p>
            </div>
        </>
    )
}

export default About