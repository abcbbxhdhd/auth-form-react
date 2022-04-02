import React from "react"
import "./FormLowerLabel.css"
import { useNavigate } from "react-router-dom"

function FormLowerLabel({ type, ...props }) {
    const navigate = useNavigate()

    const login = () => {
        navigate("/")
    }

    const register = () => {
        navigate("/register")
    }

    return (
        type === "login"
            ? <h2 className="form-lower-label">Don't have an account? <span onClick={register} className="form-lower-label__link">Sign up</span></h2>
            : <h2 className="form-lower-label">Already have an account? <span onClick={login} className="form-lower-label__link">Sign in</span></h2>
    )
}

export default FormLowerLabel