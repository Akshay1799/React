//Nabar.jsx
import React from 'react'
import ThemeContext from '../Contexts/ThemeContext.JS'
import { useContext } from 'react'

const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    return (

        <header className={`nav-links ${theme}`}>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>

    )
}

export default Navbar