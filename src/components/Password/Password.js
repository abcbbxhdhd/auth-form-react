import React from "react"
import "./Password.css"

function Password({ onChange, value, ...props}) {
    return (
        <input 
            placeholder={props.confirmation ? "Confirm password" : "Password"}
            name={props.confirmation ? "confirmation" : "password"} 
            className="password" 
            type="password" 
            value={value} 
            onChange={(e) => onChange(e)} />
    )
}

export default Password