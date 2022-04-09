import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { ChromePicker } from 'react-color';

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
const ChangeBackColorBtn = styled.span`
    color: white;
    cursor: pointer;
    padding: 3px 10px;
`

const ModalColorPicker = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AcceptBtn = styled.span`
    margin-top: 20px;
    padding: 5px 20px;
    background-color: #fff;
    cursor: pointer;
`

const Navigation = ({backColor, setBackColor}) => {

    const { isLogin, logout, email } = useContext(UserContext)
    const [ isShowColorPicker, setIsShowColorPicker] = useState(false)

    return (
        <Header>
            <NavTemplate>
                <Logo>VISUAL TRACKS</Logo>
                <div>
                    <ChangeBackColorBtn onClick={() => setIsShowColorPicker(!isShowColorPicker)}>CHANGE BcOLOr</ChangeBackColorBtn>
                    <Link to="/">Home</Link>
                    { isLogin ? 
                        <>
                        <Link to="#" onClick={logout}>Logout</Link>
                        <span>Hello, {email}</span>
                        </>
                        :
                        <>
                        <Link to="register">Register</Link>
                        <Link to="login">Login</Link>
                        </>
                    }
                </div>
            </NavTemplate>
            {isShowColorPicker ?
            <ModalColorPicker>
                <ChromePicker color={backColor} onChangeComplete={(color) => setBackColor(color.hex)}/>
                <AcceptBtn onClick={()=>setIsShowColorPicker(!isShowColorPicker)}>OK</AcceptBtn>
            </ModalColorPicker>
            : null}
        </Header>
    )
}

export default Navigation