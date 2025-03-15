import React from 'react'
import { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const [isSet, setIsSet] = useState(false)

  const handleToggle = () => {
    
      setIsOn((prev)=>{
        const newState = !prev;
        document.body.style.backgroundColor = newState?'wheat' : "";
        document.body.style.color = newState?'black' : "";
        return newState;
      });
    
  };
  const handleToggle2 = () => {
    setIsSet(!isSet);
  }

  return (
    <>
      <button onClick={handleToggle}>{isOn ? "Turn off" : " Turn on"}</button>
      <button onClick={handleToggle2}>{isSet ? "Click to Hide" : "Click to Show"}</button>
      {isSet && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolores! </p>}

    </>
  )
}

export default Toggle