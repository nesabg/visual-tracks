import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <header>
            <nav>
                <span>VISUAL TRACKS</span> ---  
                <Link to="/">Home</Link> - 
                <Link to="register">Register</Link> - 
                <Link to="login">Login</Link>
            </nav>
        </header>
    )
}

export default Navigation