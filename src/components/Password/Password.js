import React from "react"

function Password({ onChange, value, ...props}) {
    return (
        <input name="password" className="password" type="password" value={value} onChange={onChange} />
    )
}