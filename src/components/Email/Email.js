import React from "react"
import "./Email.css"

function Email({ onChange, value, ...props }) {
    return (
        <input name="email" className="email" type="email" value={value} onChange={onChange}/>
    )
}