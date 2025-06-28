import React,{useContext} from "react"
// import userContext from "../context/userContext"
import themeContext from "../context/themeContext";

const Navbar = () => {

  // for user
    // const user = useContext(userContext);
    // const  {name} = user; // Object destructuring


  // for theme
    const {theme, toggleTheme} = useContext(themeContext);
    // here we have destructure the object
    return (
      <>
        {/* <h1>{`Hello ${name}`}</h1> */}
        <h3>{`Current theme: ${theme}`}</h3>
      <button onClick = {toggleTheme}>Toggle theme</button>
    </>
  )
}

export default Navbar