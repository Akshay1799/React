//Card.jsx
import React from 'react'
import ThemeContext from '../Contexts/ThemeContext.JS'
import { useContext } from 'react'
import img from '../assets/christopher-campbell-unsplash.jpg'

const Card = () => {
    const { theme } = useContext(ThemeContext)
    return (

        <div className={`card ${theme}`}>
            <img src={img} alt="christopher-campbell" />
            <p><strong>Christopher Campbell</strong></p>
        </div>

    )
}

export default Card