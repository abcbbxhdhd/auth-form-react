import React from "react"
import "./Button.css"

function Button({ onClick, type, ...props}) {
    return (
        type === "login" 
            ? <button className="submit-button" onClick={onClick}>Login</button>
            : <button className="submit-button" onClick={onClick}>Register</button>
    )
}

export default Button