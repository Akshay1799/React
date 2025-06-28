import React,{useContext} from "react"
import userContext from "../context/userContext"
const Navbar = () => {

    const user = useContext(userContext);
    const  {name} = user;
  return (
    <>
        <h1>{`Hello ${name}`}</h1>
    </>
  )
}

export default Navbar