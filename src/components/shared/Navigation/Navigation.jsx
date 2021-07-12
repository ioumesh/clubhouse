import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="container">
            <Link to="/">
                <img src="/images/logo.png" alt="logo" />
                <span>Yourhouse</span>
            </Link>

        </nav>
    )
}

export default Navigation
