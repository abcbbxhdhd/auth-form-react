import React from "react"
import "./FormTitle.css"

function FormTitle({ type, ...props}) {
    return (
        type === "login"
            ? <h1 className="form_title">LOGIN</h1>
            : <h1 className="form_title">REGISTER</h1>
    )
}

export default FormTitle