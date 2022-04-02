import React from "react"
import Header from "../Header/Header"
import "./Layout.css"

function Layout({ children }) {
    return (
        <div className="main__layout">
            <Header />
            {children}
        </div>
    )
}

export default Layout