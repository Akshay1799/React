import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <ul>
            <li style={{listStyle:'none'}}>
                <NavLink to={'/'} className={({isActive})=>isActive?"active-link":''} style={{listStyle:'none',padding: 0,margin: 7}}>Home</NavLink>
                <NavLink to={'/about'} className={({isActive})=>isActive?"active-link":''} style={{listStyle:'none',padding: 0,margin: 7}}>About</NavLink>
                <NavLink to={'/contact'} className={({isActive})=>isActive?"active-link":''} style={{listStyle:'none',padding: 0,margin: 7}}>Contact</NavLink>
            </li>
            {/* <li>
            </li>
            <li>
            </li> */}
        </ul>
    </div>
  )
}

export default Navbar