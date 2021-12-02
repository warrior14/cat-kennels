import React, { useState } from "react";


// making the prop card and having the parameter of myName so that when I invoke it on Kennel.js, it will say my name
export const PropsAndState = ({myName}) => {
// make the empty variable first, then the function that changes the value of that variable and then let the state know what the intial value is
    let [countClicks, setCountClicks] = useState(0)


    const handleClick = () => {
        // good practice
        // make a copy of state, modify it, then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    return (
        <> 
            <h3>Welcome, {myName}</h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}> Click Me!</button>

        </>
    )
}