import React from 'react'
import { useState, useEffect } from 'react'

const Greeting = () => {
    const [hours, setHours] = useState(new Date().getHours());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHours(new Date().getHours())
        }, 60000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    let greeting;
    if (hours < 12) {
        greeting = 'Good Morning!'
    } else if (hours < 18) {
        greeting = 'Good Afternoon!'
    } else {
        greeting = 'Good Evening!'
    }

    return (
        <>
            <h2>Hey, there!👋</h2>
            <h4>
            {greeting}
            </h4>
        </>
    )
}

export default Greeting