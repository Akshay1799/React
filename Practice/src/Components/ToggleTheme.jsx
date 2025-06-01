import React,{useState, useEffect} from "react";

const ToggleTheme = () => {
    const [theme, setTheme] = useState(true);

    const themeHandler = () => {
        setTheme(theme == 'light'?'dark':'light');
    }

    useEffect(() => {
      document.body.className = theme;
    }, [theme])
    

    return (
        <>
            <h3>Change the theme</h3>
            <h5>current theme: {theme?'light':'dark'}</h5>
            <button onClick={themeHandler}>click to change theme</button>
        </>
    )
}
export default ToggleTheme