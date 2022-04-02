import React, { useEffect, useState } from "react"
import "./Header.css"
import { auth } from "../../firebase-config"
import { onAuthStateChanged, signOut } from "firebase/auth"

function Header() {
    const [user, setUser] = useState({
        auth: false,
        email: ""
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    auth: true,
                    email: user.email
                })
            } else {
                setUser({
                    auth: false,
                    email: ""
                })
            }
        })
    }, [])

    

    const logout = () => {
        signOut(auth).then(auth.currentUser.email)
    }

    return (
        <header>
            {
                user.auth 
                    ? <h1 onClick={logout} className="logout__enabled">Logout<span className="email__info"> ({user.email})</span></h1>
                    : <h1 className="logout__disabled">Logout</h1>
            }
        </header>
    )
}

export default Header