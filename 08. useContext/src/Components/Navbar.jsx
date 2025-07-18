import React, { useContext } from "react"
// import userContext from "../context/userContext"
import themeContext from "../context/themeContext";
import authContext from "../context/authContext";

const Navbar = () => {

  // for user
  // const user = useContext(userContext);
  // const  {name} = user; // Object destructuring


  // for theme
  // const {theme, toggleTheme} = useContext(themeContext);
  // here we have destructure the object
  //   return (
  //     <>
  //       {/* <h1>{`Hello ${name}`}</h1> */}
  //       <h3>{`Current theme: ${theme}`}</h3>
  //     <button onClick = {toggleTheme}>Toggle theme</button>
  //   </>
  // )


  const { user, login, logout } = useContext(authContext)
  return (
    <>
      {/* <div style={{ padding: "1rem", backgroundColor: "#f4f4f4" }}> */}
        <h2>My App</h2>
        {user ?
          (<button onClick={logout}>Log out</button>)
         :(<button onClick={login}> Log in</button>)
        }
      {/* </div> */}
    </>
  )
}

export default Navbar