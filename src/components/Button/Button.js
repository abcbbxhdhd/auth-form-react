import React from "react"

function Button({ onClick, type, ...props}) {
    return (
        type === "login" 
            ? <button onClick={onClick}>Login</button>
            : <button onClick={onClick}>Register</button>
    )
}