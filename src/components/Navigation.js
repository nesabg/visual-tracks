import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
    padding: 5px 0;
    background-color: firebrick;
    border-bottom: 1px solid white;
`
const Logo = styled.div`
    text-align: left;
`

const NavTemplate = styled.nav`
    width: 1280px;
    margin: 0 auto;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 2fr 3fr;
    color: white;
    text-align: right;
    
    a {
        color: white;
        font-size: 20px;
        margin: 0 20px;
        text-decoration: none;
        transition: all 0.5s ease-in-out;
    }

    a:hover {
        border-bottom: 1px solid white;
    }

    span {
        color: white;
    }
`

const Navigation = () => {
    return (
        <Header>
            <NavTemplate>
                <Logo>VISUAL TRACKS</Logo>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="register">Register</Link>
                    <Link to="login">Login</Link>
                </div>
            </NavTemplate>
        </Header>
    )
}

export default Navigation