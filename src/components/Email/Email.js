import React from "react"
import "./Email.css"

function Email({ onChange, value, ...props }) {
    return (
        <input 
            placeholder="Email"
            name="email" 
            className="email" 
            type="email" 
            value={value} 
            onChange={(e) => onChange(e)} />
    )
}

export default Email