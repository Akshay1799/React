//Button.jsx
import React from 'react'
import ThemeContext from '../Contexts/ThemeContext.JS';
import { useContext } from 'react';

const Button = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const onClickHandler = ()=>{
        setTheme(theme === 'light'? 'dark' : 'light');
    }
  return (
    <div className={theme}>
        <button type='button' className={theme} onClick={onClickHandler}>{theme}</button>
    </div>
  )
}

export default Button